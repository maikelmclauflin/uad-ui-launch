import { ethers, BigNumber } from "ethers";

import { useConnectedContext } from "./context/connected";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  TWAPOracle__factory,
  UbiquityAlgorithmicDollarManager,
} from "../src/types";

export async function _getTwapPrice(
  provider: ethers.providers.Web3Provider | undefined,
  manager: UbiquityAlgorithmicDollarManager | undefined,
  twapPrice: BigNumber | undefined,
  setTwapPrice: Dispatch<SetStateAction<BigNumber | undefined>>
): Promise<void> {
  if (provider && manager) {
    const uadAdr = await manager.dollarTokenAddress();
    const TWAP_ADDR = await manager.twapOracleAddress();
    const twap = TWAPOracle__factory.connect(TWAP_ADDR, provider);

    const rawPrice = await twap.consult(uadAdr);
    if (twapPrice) {
      if (!twapPrice.eq(rawPrice)) setTwapPrice(rawPrice);
    }
  }
}

const TwapPrice = () => {
  const { provider, manager, twapPrice, setTwapPrice } = useConnectedContext();

  useEffect(() => {
    _getTwapPrice(provider, manager, twapPrice, setTwapPrice);
  });

  if (!manager) {
    return null;
  }

  const handleClick = async () =>
    _getTwapPrice(provider, manager, twapPrice, setTwapPrice);

  return (
    <>
      <div className="row">
        <button onClick={handleClick}>Get TWAP Price</button>
        <p className="value">
          uAD TWAP Price: {twapPrice && ethers.utils.formatEther(twapPrice)} $
        </p>
      </div>
    </>
  );
};

export default TwapPrice;

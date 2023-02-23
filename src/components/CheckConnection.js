import React, { useEffect, useContext } from "react";
import NetInfo from "@react-native-community/netinfo";
import { GeneralContext } from "../contexts/general/state";

const CheckConnection = () => {
  const { updateConnection } = useContext(GeneralContext);
  useEffect(() => {
    (async () => {
      const response = await NetInfo.fetch();
      updateConnection(response.isConnected);
    })();
  }, []);
};

export default CheckConnection;

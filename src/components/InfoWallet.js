const InfoWallet = ({ wallet }) => {
  return (
    <div>
      <p>Dirección: {wallet.address || ""}</p>
      <p>Private key: {wallet.privateKey || ""}</p>
      <p>Public key: {wallet.publicKey || ""}</p>
    </div>
  );
};

export default InfoWallet;

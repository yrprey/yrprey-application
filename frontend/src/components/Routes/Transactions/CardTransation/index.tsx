import Image from "next/image";
import { StyledCardTransactionsSection } from "./style";

const CardTransaction = ({transaction}: any) => {

  return (
    <StyledCardTransactionsSection>
      <div className="card-table">
        <div className="content-user">
          <Image className="user-transaction" src={"/user-yrprey.webp"} alt="user-yrprey" width={10000} height={10000} />
          <p className="title">{transaction.username} - Transaction</p>
        </div>
        <p className="value">{transaction.valor} ETH</p>
      </div>
    </StyledCardTransactionsSection>
  );
};

export default CardTransaction;

import { StyledCounterSection } from "./style";

const Counter = () => {

  return (
    <StyledCounterSection>
      <div className="container">
        <p>+100<span>vulnerabilities</span></p>
        <p>+68<span>failures</span></p>
        <p>+79<span>bugs</span></p>
        <p>+17<span>insecure pages</span></p>
      </div>
    </StyledCounterSection>
  );
}

export default Counter;

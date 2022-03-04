import { Fragment } from "react";
import { useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

const dummyData = [
  { id: "q1", author: "Hossein", text: "Learning is fun!" },
  { id: "q2", author: "Tavasolnia", text: "Learning is more fun!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = dummyData.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>no quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <p>{params.quoteId}</p>
    </Fragment>
  );
};

export default QuoteDetail;

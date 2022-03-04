import QuoteList from "../components/quotes/QuoteList";

const dummyData = [
  { id: "q1", author: "Hossein", text: "Learning is fun!" },
  { id: "q2", author: "Tavasolnia", text: "Learning is more fun!" },
];
const AllQuotes = () => {
  return <QuoteList quotes={dummyData} />;
};

export default AllQuotes;

import { Routes, Route, Navigate } from "react-router-dom";

import AllQuotes from "./page/AllQuotes";
import QuoteDetail from "./page/QuoteDetail";
import NewQuotes from "./page/NewQuote";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import NotFound from "./page/NotFoundPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="quotes" element={<AllQuotes />} />
        <Route path="quotes/:quoteId">
          <Route index={true} element={<QuoteDetail />} />
          <Route path="comments" element={<Comments />} />
        </Route>
        <Route path="new-quote" element={<NewQuotes />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="not-found" />} />
      </Routes>
    </Layout>
  );
}

export default App;

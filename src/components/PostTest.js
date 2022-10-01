import { render, screen, waitFor } from "@testing-library/react";
import PostPage from './components/PostPage';

test("Renders semua post", async () => {
  render(<PostPage />);

  const post = await waitFor(
    () => screen.getByText,
    { timeout: 5000 }
  )
  expect(post).toBeInTheDocument();
});
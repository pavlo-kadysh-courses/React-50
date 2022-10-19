import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PostsPage = lazy(() => import("./pages/PostsPage/PostsPage"));
const MyBooksPage = lazy(() => import("./pages/MyBooksPage/MyBooksPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const SinglePostPage = lazy(() => import("./pages/SinglePostPage/SinglePostPage"));
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const ListPage = lazy(() => import("./pages/ProductPage/ListPage/ListPage"));
const AddPage = lazy(() => import("./pages/ProductPage/AddPage/AddPage"));
const SearchPage = lazy(() => import("./pages/ProductPage/SearchPage/SearchPage"));
const SharedLayout = lazy(() => import("./components/SharedLayout/SharedLayout"));
const CommentsPage = lazy(() => import("./pages/CommentsPage/CommentsPage"));
const MyFavoriteBooksPage = lazy(() => import("./pages/MyFavoriteBooksPage/MyFavoriteBooksPage"));


export default function UserRoute() {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
          <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />}/>
              <Route path="/posts" element={<PostsPage />}/>
              <Route path="/posts/:id" element={<SinglePostPage />} >
                  <Route path="comments" element={<CommentsPage />} />
              </Route>
              <Route path="/my-books" element={<MyBooksPage />}/>
              <Route path="/my-favorite-books" element={<MyFavoriteBooksPage />}/>
              <Route path="/products" element={<ProductPage />}>
                  <Route path="list" element={<ListPage />}/>
                  <Route path="add" element={<AddPage />}/>
                  <Route path="search" element={<SearchPage />}/>
              </Route>
              <Route path="*" element={<NotFoundPage />} />
          </Route>
      </Routes>
    </Suspense>
  )
}

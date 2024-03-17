import React from "react";
import blog from "../assets/images/blog.png";
import { BreadcrumbsWithIcon } from "../components/BreadcrumbsWithIcon";
import CardComponentBlog from "../components/CardBlog";
import { Button } from "@material-tailwind/react";

const Blog: React.FC = () => {
  return (
    <>
      <section className="w-full py-10 bg-[#F5F5F5] flex flex-col justify-center items-center">
        <div className="container gap-4 mx-auto w-11/12 md:w-10/12">
          <div className="w-full flex items-center justify-start rounded-2xl">
            <BreadcrumbsWithIcon Address={["وبلاگ"]} />
          </div>
          <div className="w-full flex justify-center lg:justify-start items-start my-4 lg:my-2 px-10 lg:px-16 lg:mt-10">
            <p className="text-[#7F38B7] text-3xl sm:text-4xl font-semibold  ">
              بلاگ‌ها و مقالات
            </p>
          </div>
          <div className="space-y-4 grid-cols-1 sm:gap-4 sm:space-y-0 grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3">

            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
            <CardComponentBlog
                title="بلاگ"
                date="1402/2/14"
                text="صبح ها حالش خوب است ، یعنی بدون ترس باهاش صحبت میکنم ، کمی با من مهربانتر است..."
                img={blog}
         />
          </div>

          <Button className="bg-[#8754AF] mt-3 self-center">مشاهده بیشتر</Button>

        </div>
      </section>
    </>
  );
};

export default Blog;
import Footer from "./Footer";
import Grid from "./Grid";

const FirstHero = () => {
  return (
    <>
      <div className="w-[1280px] h-[312px]  mt-24 flex flex-col items-center gap-8">
        <div className="w-[355px] h-[32px] rounded-lg bg-gray-100 flex items-center px-1">
          <h1 className="text-[#6941C6] w-[102px] h-[24px] rounded-lg bg-white flex items-center justify-center ">
            New Feature
          </h1>
          <p className=" text-[#6941C6] w-[270px] h-[20px]   flex items-center justify-center">
            Check out the team dashboard
          </p>
        </div>
        <h1 className="text-5xl font-semibold">
          Beautiful analytics to grow smarter
        </h1>
        <h1 className="text-xl text-center w-[60%]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </h1>
        <div className="w-[277px] h-[60px] flex gap-3">
          <button className="h-full w-[40%] bg-white rounded-lg border-2">
            Demo
          </button>
          <button className="h-full w-[40%] bg-[#6941C6] text-white rounded-lg">
            Sign up
          </button>
        </div>
      </div>
      <div className="  rounded-lg bg-black p-2 mt-10">
        <img src="/images/Screen mockup (REPLACE FILL).png" />
      </div>
      <div className="w-[1280px] h-[104px]  flex flex-col mt-20 gap-10 items-center">
        <p>Join 4,000+ companies already growing</p>
        <div className="w-[1200px] h-[48px]  flex justify-evenly">
          <img src="/images/Fictional company logo.png" alt="" />
          <img src="/images/Fictional company logo1.png" alt="" />
          <img src="/images/Fictional company logo2.png" alt="" />
          <img src="/images/Fictional company logo3.png" alt="" />
          <img src="/images/Fictional company logo4.png" alt="" />
          <img src="/images/Fictional company logo5.png" alt="" />
        </div>
      </div>
      <div className="w-[1440px] h-[836px]  flex flex-col items-center py-16 mt-28">
        <div className="w-[1280px] h-[160px]  flex flex-col items-center">
          <div className="w-[768px] h-[160px]  flex flex-col items-center gap-5">
            <h1 className="text-[#6941C6]">Features</h1>
            <h1 className="text-4xl">
              Analytics that feels like it’s from the future
            </h1>
            <h2 className="text-xl text-center text-gray-500">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </h2>
          </div>
        </div>
        <div className="h-[420px] w-[1280px]  mt-16 flex flex-col gap-10 justify-center items-center">
          <div className="h-[178px] w-[1216px] flex justify-center gap-14">
            <img src="/images/_Feature text.png" alt="" />
            <img src="/images/_Feature text1.png" alt="" />
            <img src="/images/_Feature text2.png" alt="" />
          </div>
          <div className="h-[178px] w-[1216px] flex justify-center gap-10">
            <img src="/images/_Feature text4.png" alt="" />
            <img src="/images/_Feature text5.png" alt="" />
            <img src="/images/_Feature text6.png" alt="" />
          </div>
        </div>
      </div>
      <div className="h-[360px] w-[1280px]  mt-6 flex flex-col items-center gap-8">
        <img
          className="h-[40px] w-[140px]"
          src="/images/Fictional company logohy.png"
          alt=""
        />

        <h1 className="text-5xl text-center">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h1>
        <div className=" flex flex-col items-center gap-2">
          <img className="h-[64px] w-[64px]" src="/images/Avatar.png" alt="" />
          <h1 className="text-2xl font-semibold">Candice Wu</h1>
          <h1 className="text-xl text-gray-600">Product Manager, Sisyphus</h1>
        </div>
      </div>
      <div className="h-[210px] w-[1280px]  mt-28 flex flex-col items-center gap-8">
        <h1 className="px-2 border-2 rounded-3xl bg-gray-200 text-blue-600">
          Features
        </h1>
        <h1 className="text-5xl">
          Cutting-edge features for advanced analytics
        </h1>
        <h1 className="text-xl text-center w-[50%] text-gray-500">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </h1>
      </div>
      <div className="h-[210px] w-[1280px]  mt-10 flex flex-col items-center  relative">
        <img
          className="h-[652px] w-[868px]"
          src="/images/3_2 screen mockup.png"
          alt=""
        />
        <img
          className="h-[500px] w-[244px] absolute left-[10%] top-[50%]"
          src="/images/iPhone 12 Pro mockup.png"
          alt=""
        />
      </div>
      <div className="h-[178px] w-[1216px] flex justify-center gap-5 mt-[480px]">
        <img src="/images/_Feature text.png" alt="" />
        <img src="/images/_Feature text1.png" alt="" />
        <img src="/images/_Feature text2.png" alt="" />
      </div>
      <div className="w-[1280px] h-[94px]  mt-28 flex flex-col items-center gap-5">
        <h1 className="text-5xl">Frequently asked questions</h1>
        <h1 className="text-2xl text-gray-500">
          Everything you need to know about the product and billing.
        </h1>
      </div>
      <div className="w-[1280px] h-[504px]  mt-20  flex flex-col items-center gap-5">
        <div className="w-[980px] h-[504px]    flex flex-col items-center gap-5">
          <div className="w-[100%]">
            <div className="flex w-[100%] justify-between ">
              <h1 className="text-2xl font-semibold">
                Is there a free trial available?
              </h1>
              <img
                src="/images/Icon wrap.png"
                alt=""
                className="w-[24] h-[26]"
              />
            </div>
            <h2 className="text-xl text-gray-500">
              Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.
            </h2>
          </div>
          <div className="flex w-[100%] justify-between mt-10">
            <h1 className="text-2xl font-semibold ">
              Can I change my plan later?
            </h1>
            <img
              src="/images/Icon wrap+.png"
              alt=""
              className="w-[24] h-[26]"
            />
          </div>
          <div className="flex w-[100%] justify-between mt-5">
            <h1 className="text-2xl font-semibold">
              What is your cancellation policy?
            </h1>
            <img
              src="/images/Icon wrap+.png"
              alt=""
              className="w-[24] h-[26]"
            />
          </div>
          <div className="flex w-[100%] justify-between mt-5">
            <h1 className="text-2xl font-semibold  ">
              Can other info be added to an invoice?
            </h1>
            <img
              src="/images/Icon wrap+.png"
              alt=""
              className="w-[24] h-[26]"
            />
          </div>
          <div className="flex w-[100%] justify-between mt-5">
            <h1 className="text-2xl font-semibold">How does billing work?</h1>
            <img
              src="/images/Icon wrap+.png"
              alt=""
              className="w-[24] h-[26]"
            />
          </div>
          <div className="flex w-[100%] justify-between mt-5">
            <h1 className="text-2xl font-semibold">
              How do I change my account email?
            </h1>
            <img
              src="/images/Icon wrap+.png"
              alt=""
              className="w-[24] h-[26]"
            />
          </div>
        </div>
      </div>
      <div className="h-[300px] w-[1280px] mt-10 flex flex-col gap-5 items-center justify-center">
        <img
          src="/images/Avatar group.png"
          alt=""
          className="w-[120px] h-[56px]"
        />
        <h1 className="text-2xl font-semibold">Still have questions?</h1>
        <h2 className="text-xl text-gray-500">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </h2>
        <button className="h-[48px] w-[134px] rounded-lg text-white bg-[#7f56d9]">
          Get in touch
        </button>
      </div>
      <div className="w-[1080px] h-[130px] flex justify-between mt-16">
        <div className=" flex flex-col gap-4">
          <h3 className="text-[#7f56d9]">Our blog</h3>
          <h1 className="text-4xl font-semibold">Latest blog posts</h1>
          <h1 className="text-2xl text-gray-500">
            Tool and strategies modern teams need to help their companies grow.
          </h1>
        </div>
        <div>
          <button className="bg-[#7f56d9] h-[48px] w-[148px] rounded-lg">
            View all posts
          </button>
        </div>
      </div>
      <div className="w-[1080px] h-[444px] flex justify-between  mt-16 ">
        <div className="w-[900px] h-[100%] flex justify-between p-5  ">
          <img src="/images/Blog post card.png" alt="" />
        </div>
        <div className="w-[900px] h-[100%] flex justify-between p-5 ">
          <img src="/images/Blog post card1.png" alt="" />
        </div>
        <div className="w-[900px] h-[100%] flex justify-between  p-5">
          <img src="/images/Blog post card2.png" alt="" />
        </div>
      </div>

      <div className="w-[1080px] h-[350px] flex flex-col items-center justify-center   mt-16 gap-5 ">
        <h1 className="text-4xl font-semibold">Start your free trial</h1>
        <h2 className="text-2xl text-gray-500">
          Join over 4,000+ startups already growing with Untitled.
        </h2>
        <div>
          <button className="h-[48px] w-[128px] border-2 rounded-lg mx-2 text-2xl">
            Learn more
          </button>
          <button className="h-[48px] w-[128px] text-white bg-blue-400 rounded-lg mx-2 text-2xl">
            Get started
          </button>
        </div>
      </div>
      <Grid />
      <Footer />
    </>
  );
};

export default FirstHero;

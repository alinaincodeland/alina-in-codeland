import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import image from "../public/profile_picture.jpg";
import image1 from "../public/image1.jpg";
import image2 from "../public/image2.jpg";
import image3 from "../public/image3.jpg";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title> Alina Cuznetov Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">alinaincodeland</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center py-5">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Alina Cuznetov
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Frontend developer</h3>
            <p className="text-m py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique error qui blanditiis autem, non aliquid nemo recusandae
              dignissimos.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/alina-cuznetov-733071138">
              <AiFillLinkedin />
            </a>
            <a href="">
              <AiFillGithub />
            </a>
          </div>

          <div className="relative my-8">
            <Image
              src={image}
              alt="alinaincodeland"
              className="rounded-full w-80 h-auto bg-cover mx-auto md:h-96 md:w-96"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1"> Services I offer </h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span className="text-teal-500"> lorem </span>
              lorem <span className="text-teal-500"> lorem </span>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span className="text-teal-500"> lorem </span>
              lorem <span className="text-teal-500"> lorem </span>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-xl border-spacing-2 p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={image1}
                width={100}
                height={100}
                alt="project1"
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                quos consectetur quia quidem odit quis placeat laudantium odio
                beatae id, quasi, porro explicabo enim ipsa omnis maiores!
                Tempora, provident deleniti!
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-xl border-spacing-2 p-10 rounded-xl my-10  dark:bg-white">
              <Image
                src={image2}
                width={100}
                height={100}
                alt="project1"
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                quos consectetur quia quidem odit quis placeat laudantium odio
                beatae id, quasi, porro explicabo enim ipsa omnis maiores!
                Tempora, provident deleniti!
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-xl border-spacing-2 p-10 rounded-xl my-10  dark:bg-white">
              <Image
                src={image2}
                width={100}
                height={100}
                alt="project1"
                className="m-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                quos consectetur quia quidem odit quis placeat laudantium odio
                beatae id, quasi, porro explicabo enim ipsa omnis maiores!
                Tempora, provident deleniti!
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1"> Projects </h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span className="text-teal-500"> lorem </span>
              lorem <span className="text-teal-500"> lorem </span>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span className="text-teal-500"> lorem </span>
              lorem <span className="text-teal-500"> lorem </span>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={image1}
                className="rounded-lg object-cover w-full h-full"
                layout="response"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={image2}
                className="rounded-lg object-cover w-full h-full"
                layout="response"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={image3}
                className="rounded-lg object-cover w-full h-full"
                layout="response"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={image1}
                className="rounded-lg object-cover w-full h-full"
                layout="response"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={image2}
                className="rounded-lg object-cover w-full h-full"
                layout="response"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={image3}
                className="rounded-lg object-cover w-full h-full"
                layout="response"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

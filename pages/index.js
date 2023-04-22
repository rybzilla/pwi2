import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import legia from "../public/legia.png";
import josue from "../public/josue.png";
import wszolek from "../public/wszolek.png";
import mladen from "../public/mladen.png";
import c from "../public/c.jpg";
import fee from "../public/fee.jpg";
import guess from "../public/guess.jpeg";
import trud from "../public/trud.jpg";
import ultras2 from "../public/ultras2.jpg";
import uprising from "../public/uprising.jpeg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Legia Warszawa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h3 className="text-xl font-burtons dark:text-white">
              Dawid Rybka
            </h3>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-green-700 text-white px-4 py-2 rounded-md ml-8"
                  href="https://legia.com/pilka-nozna"
                >
                  legia.com
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-green-700 font-medium md:text-6xl">
              Fanowska strona największego klubu w Polsce
            </h2>
            <h3 className="text-2xl py-2 text-red-600">
              16-krotny mistrz Polski oraz 19-krotny zdobywca Pucharu Polski
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Niepokonane miasto, niepokonany klub...
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <a href="https://twitter.com/LegiaWarszawa">
              <AiFillTwitterCircle className="text-blue-400" />
            </a>
            <a href="https://www.instagram.com/legiawarszawa/">
              <AiFillInstagram className="text-pink-600" />
            </a>
            <a href="https://www.youtube.com/@LegiaWarszawa">
              <AiFillYoutube className="text-red-600" />
            </a>
          </div>
          <div className="mx-auto w-40 h-40 mt-20 md:h-60 md:w-60 lg:h-70 lg:w-70">
            <Image src={legia} alt="zdjecie herbu Legii" />
          </div>
        </section>
        <section className="mt-40">
          <div>
            <h3 className="text-2xl dark:text-white text-center">
              Najlepsi w klasyfikacji kanadyjskiej
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300 max-w-md text-center mx-auto">
              <span className="text-yellow-600">Punktacja Kanadyjska</span> –
              rodzaj indywidualnej statystyki sportowej, prowadzonej w
              niektórych grach zespołowych i polegającej na wspólnym sumowaniu{" "}
              <span className="text-red-600">bramek</span> oraz{" "}
              <span className="text-green-600">asyst</span>.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image
                className="mx-auto"
                alt="Josue Paqueira"
                src={josue}
                width={200}
                height={200}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                1. Josué Pesqueira
              </h3>
              <p className="py-2 dark:text-gray-300">
                <span className="text-yellow-600">15</span> punktów
              </p>
              <p className="py-1 dark:text-gray-300">
                <span className="text-red-600">10</span> goli
              </p>
              <p className="py-1 dark:text-gray-300">
                <span className="text-green-600">5</span> asyst
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image
                className="mx-auto"
                alt="Paweł Wszołek"
                src={wszolek}
                width={200}
                height={200}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                2. Paweł Wszołek
              </h3>
              <p className="py-2 dark:text-gray-300">
                <span className="text-yellow-600">13</span> punktów
              </p>
              <p className="py-1 dark:text-gray-300">
                <span className="text-red-600">7</span> goli
              </p>
              <p className="py-1 dark:text-gray-300">
                <span className="text-green-600">6</span> asyst
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image
                className="mx-auto"
                alt="Filip Mladenović"
                src={mladen}
                width={200}
                height={200}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                3. Filip Mladenović
              </h3>
              <p className="py-2 dark:text-gray-300">
                <span className="text-yellow-600">11</span> punktów
              </p>
              <p className="py-1 dark:text-gray-300">
                <span className="text-red-600">6</span> goli
              </p>
              <p className="py-1 dark:text-gray-300">
                <span className="text-green-600">5</span> asyst
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-center">
              Oprawy
            </h3>
          </div>
          <div className="flex flex-col gap-20 py-10 lg:flex-row lg:flex-wrap justify-center">
            <div className="basis-1/4">
              <Image
                src={c}
                alt="Z wysokiego C"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={fee}
                alt="UEFA coruption"
                className="rounded-lg object-cover responsive"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={guess}
                alt="Powrót do LM po 21 latach"
                className="rounded-lg object-cover responsive"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={trud}
                alt="Kibic"
                className="rounded-lg object-cover responsive"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={ultras2}
                alt="Statue of Liberty"
                className="rounded-lg object-cover responsive"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/4">
              <Image
                src={uprising}
                alt="Powstanie Warszawskie"
                className="rounded-lg object-cover responsive"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

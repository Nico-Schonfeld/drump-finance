"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeLanding = () => {
  return (
    <main className="relative h-auto">
      <div className="fixed inset-0 h-full w-full bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#f0f0f010_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f010_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-auto"
      >
        <Image
          src="/assets/images/ray.png"
          alt="image"
          width={1980}
          height={1080}
          className="object-cover fixed top-0 left-0 w-full h-full"
        />
      </motion.div>

      <div className="relative z-[1] h-full container max-w-8xl flex flex-col items-center justify-start px-20 pt-20 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-bold text-4xl lg:text-6xl text-center py-40 text-balance"
        >
          Domina tus{" "}
          <span className="inline-flex animate-text-gradient bg-gradient-to-r from-green-700 via-green-300 to-green-700 bg-[200%_auto] bg-clip-text text-transparent">
            Finanzas
          </span>{" "}
          con decisiones{" "}
          <span className=" animate-text-gradient bg-gradient-to-r from-green-700 via-green-300 to-green-700 bg-[200%_auto] bg-clip-text text-transparent">
            inteligentes
          </span>
        </motion.h1>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gray-50 dark:bg-[#1c1917] w-full h-[50rem] border-2 shadow-xl rounded-md flex items-center justify-center flex-col gap-3"
        >
          <Button className="w-60" variant={"outline"} size={"lg"}>
            Live Demo
          </Button>
          <Button className="w-60" variant={"outline"} size={"lg"}>
            Docs
          </Button>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="h-auto flex items-center justify-center flex-col py-32"
        >
          <div className="w-full h-auto flex items-center justify-center p-5 gap-5">
            <div className="w-[40%] h-52 bg-gray-50 dark:bg-[#1c1917] border rounded-md  flex flex-col items-center justify-center">
              <h3 className="font-bold text-2xl text-center">
                Drump <span className="text-green-500">Finance</span>
              </h3>
            </div>
            <div className="w-full h-52 p-10 bg-gray-50 dark:bg-[#1c1917] border rounded-md  flex flex-col items-center justify-center">
              <p className="text-pretty">
                Es una herramienta que está construida para ser simple, flexible
                y para todos. Hacer un seguimiento de todos sus gastos diarios
                puede ser tedioso, pero al mismo tiempo sería bueno tener una
                visón clara de su flujo de efectivo para encontrar dónde ahorrar
                y finalmente pagar sus deudas.
              </p>
            </div>
          </div>

          <div className="w-full h-auto flex items-center justify-center p-5 gap-5">
            <div className="w-[40%] h-52 bg-gray-50 dark:bg-[#1c1917] border rounded-md  flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold text-green-500">50-30-20</h3>
            </div>
            <div className="w-full h-52 p-10 bg-gray-50 dark:bg-[#1c1917] border rounded-md  flex flex-col items-center justify-center">
              <p className="text-pretty">
                Podrás manejar tus finanzas de forma sencilla y organizada,
                dividiendo tus ingresos de acuerdo a tres categorias clave:
                Necesidades, deseo y ahorro.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default HomeLanding;

import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "404 :: [.shovon]",
  description: "Personal Portfolio || [.shovon]",
};

export default function NotFoundDummy() {
  notFound();
}

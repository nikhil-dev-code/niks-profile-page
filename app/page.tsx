import { AgentInterfaces } from "@/components/AgentInterfaces";
import { AppliedAi } from "@/components/AppliedAi";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { SelectedWork } from "@/components/SelectedWork";
import { Stack } from "@/components/Stack";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Proof />
        <AppliedAi />
        <SelectedWork />
        <AgentInterfaces />
        <Career />
        <Stack />
        <Contact />
      </main>
    </>
  );
}

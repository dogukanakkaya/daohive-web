import TraitBox from "@/components/Home/TraitBox.tsx";

const traits = Object.freeze([
  {
    title: "Permanent",
    content:
      "Unlike traditional entities that can dissolve or fade, DAOs exist perpetually on the blockchain. Their rules, decisions, and histories are etched permanently and are immutable, ensuring that their legacy endures.",
    icon: "infinity",
  },
  {
    title: "Decentralized",
    content:
      "DAOs operate free from central control, powered by distributed ledger technology. This means no single entity has absolute power. Instead, power is spread across the network, safeguarding the organization against censorship and external influences.",
    icon: "boxes",
  },
  {
    title: "Governance",
    content:
      "DAOs are a radical shift in the way organizational decisions are made. Rather than a central authority, governance is distributed among token holders, ensuring that decisions are more democratic and made in the interest of the community.",
    icon: "diagram-3",
  },
  {
    title: "Participation",
    content:
      "At the heart of DAOs is the principle of direct involvement. Every token holder can have a say in decision-making processes, casting votes on proposals and collectively determining the organization's future.",
    icon: "people",
  },
]);

export default function Traits() {
  return (
    <section class="grid sm:grid-cols-2 lg:grid-cols-4 mt-10">
      {traits.map((trait) => <TraitBox trait={trait} />)}
    </section>
  );
}

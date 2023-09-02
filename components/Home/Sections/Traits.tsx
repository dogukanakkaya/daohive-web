import TraitBox from "@/components/Home/TraitBox.tsx";

export default function Traits() {
  return (
    <section class="grid grid-cols-2 sm:grid-cols-4 divide-x dark:divide-gray-700 mt-10">
      <TraitBox title="Permanent" icon="infinity">
        <p class="text-sm">
          Unlike traditional entities that can dissolve or fade, DAOs exist
          perpetually on the blockchain. Their rules, decisions, and histories
          are etched permanently and are immutable, ensuring that their legacy
          endures.
        </p>
      </TraitBox>
      <TraitBox title="Decentralized" icon="boxes">
        <p class="text-sm">
          DAOs operate free from central control, powered by distributed ledger
          technology. This means no single entity has absolute power. Instead,
          power is spread across the network, safeguarding the organization
          against censorship and external influences.
        </p>
      </TraitBox>
      <TraitBox title="Governance" icon="diagram-3">
        <p class="text-sm">
          DAOs are a radical shift in the way organizational decisions are made.
          Rather than a central authority, governance is distributed among token
          holders, ensuring that decisions are more democratic and made in the
          interest of the community.
        </p>
      </TraitBox>
      <TraitBox title="Participation" icon="people">
        <p class="text-sm">
          At the heart of DAOs is the principle of direct involvement. Every
          token holder can have a say in decision-making processes, casting
          votes on proposals and collectively determining the organization's
          future.
        </p>
      </TraitBox>
    </section>
  );
}

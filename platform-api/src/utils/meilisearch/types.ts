export interface Contract {
  id: string;
  address: string;
  name: string;
  description: string;
  voters: string[];
  voterCount: number;
  type: "VotingPrivate" | "VotingPublic";
  createdAt: string;
}

export interface Proposal {
  id: string;
  uri: string;
  metadata: {
    name: string;
    description: string;
    content: string;
    image: string;
  };
  address: string;
  startAt: number;
  endAt: number;
  createdAt: string;
}

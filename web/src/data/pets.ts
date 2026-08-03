export type PetBadge = "destaque" | "novo" | "urgente";

export type Pet = {
  id: string;
  name: string;
  sex: "f" | "m";
  age: string;
  species: string;
  size: string;
  distance: string;
  match: number;
  tags: string[];
  badge?: PetBadge;
  liked?: boolean;
  image: string;
  tone: string;
};

export const PETS: Pet[] = [
  {
    id: "lola",
    name: "Lola",
    sex: "f",
    age: "3 anos",
    species: "Gato",
    size: "Pequena",
    distance: "1,1km",
    match: 94,
    tags: ["Calma", "Castrada"],
    badge: "destaque",
    liked: true,
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
    tone: "linear-gradient(135deg, #dcf0fd, #b8e2fa)",
  },
  {
    id: "luna",
    name: "Luna",
    sex: "f",
    age: "1 ano",
    species: "Gato",
    size: "Pequena",
    distance: "2,4km",
    match: 89,
    tags: ["Exclusiva", "Vacinada"],
    badge: "novo",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80",
    tone: "linear-gradient(135deg, #d4f0dc, #90d4a4)",
  },
  {
    id: "thor",
    name: "Thor",
    sex: "m",
    age: "2 anos",
    species: "Cão",
    size: "Médio",
    distance: "2,8km",
    match: 86,
    tags: ["Sociável", "Com crianças"],
    badge: "novo",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
    tone: "linear-gradient(135deg, #f0e8d4, #d4a87a)",
  },
  {
    id: "bob",
    name: "Bob",
    sex: "m",
    age: "4 anos",
    species: "Cão",
    size: "Grande",
    distance: "4,2km",
    match: 81,
    tags: ["Tranquilo", "Treinado"],
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
    tone: "linear-gradient(135deg, #f0d4dc, #d47a90)",
  },
  {
    id: "bonita",
    name: "Bonita",
    sex: "f",
    age: "7 meses",
    species: "Gato",
    size: "Pequena",
    distance: "2,5km",
    match: 77,
    tags: ["Filhote", "Bom apetite"],
    badge: "urgente",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&q=80",
    tone: "linear-gradient(135deg, #e4d4f0, #a890d4)",
  },
];

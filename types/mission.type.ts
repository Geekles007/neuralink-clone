export type Mission = {
  id: number; // Identifiant unique pour la mission
  type: 'video' | 'image'; // Type de média associé à la mission
  text: string; // Description ou texte explicatif de la mission
  media: string; // Lien vers le média (vidéo ou image)
};

export type MissionTab = {
  id: number;
  text: string;
};

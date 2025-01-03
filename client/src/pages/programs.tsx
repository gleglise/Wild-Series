import { useEffect } from "react";
import { useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function Programs() {
  const [programs, setPrograms] = useState([] as Program[]);
  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await fetch("http://localhost:3310/api/programs");
      const programs = await response.json();
      setPrograms(programs);
    };

    fetchPrograms();
  }, []);

  return (
    <ul>
      {programs.map((program) => (
        <li key={program.id}>
          <h2>{program.title}</h2>
          <p>{program.synopsis}</p>
          <img src={program.poster} alt={program.title} />
          <p>{program.country}</p>
          <p>{program.year}</p>
        </li>
      ))}
    </ul>
  );
}

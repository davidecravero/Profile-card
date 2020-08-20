import React from "react";
import ProfileCard from "./ProfileCard";

export default function App() {
  return (
    <div className="App">
      <ProfileCard
        title="First Card component"
        description="A very talented developer"
        age={31}
        nationality="italian"
        buttonText="Click me"
      />
      <ProfileCard
        title="Second card component"
        description="Another very talented developer"
        age={35}
        nationality="Ukranian"
        buttonText="Click me"
      />
      <ProfileCard
        title="Third card component"
        description="Worst developer ever"
        age={72}
        nationality="unknown"
        buttonText="Third button"
      />
    </div>
  );
}

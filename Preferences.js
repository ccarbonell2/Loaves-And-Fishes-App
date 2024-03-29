import React from 'react';
import { useState } from 'react';

/**function Preferences() {
    return (
        <>
            <h1>Please tell us about you and the food you want. We will use this to fill a bag for you, but can't guarantee that 
                you'll get everything that you want and nothing that you do not want.
            </h1>
            <Panel title="Household" isActive={true}>
                How many people live in your house?
                How many babies live in your house?
                How many children and teens live in your house?
                How many adults live in your house?
            </Panel>
            <Panel title="Allergies" isActive={true}>
                Add Allergy
            </Panel>
            <Panel title="Preferences" isActive={true}>
                Please select the foods that you do not want.
            </Panel>
        </>
    );
};**/

export default function Preferences() {
    return (
      <>
        <h2>Almaty, Kazakhstan</h2>
        <Panel title="About" isActive={false}>
          With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel title="Etymology" isActive={true}>
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
        </Panel>
      </>
    );
  }
  
  function Panel({ title, children, isActive }) {
    return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={() => setisActive(true)}>
            Show
          </button>
        )}
      </section>
    );
  }
  

//export default Preferences;
import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
    return (<Section title="Core Concepts" id="core-concepts">
              <ul>
                {CORE_CONCEPTS.map((concept) => 
                <CoreConcept key={concept.title} {...concept} />)}
              {/* <CoreConcepts title={CORE_CONCEPTS[0].title} 
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}/>
              <CoreConcepts {...CORE_CONCEPTS[1]}/>
              <CoreConcepts {...CORE_CONCEPTS[2]}/>
              <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
              </ul>
            </Section>);
}
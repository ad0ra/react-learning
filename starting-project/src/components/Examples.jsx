import { useState } from 'react';

import TabButton from "./TabButton.jsx";
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from "../data.js";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

        function handleSelect(selectedButton) {
            //selectedButton - components, jsx, prop, state
            setSelectedTopic(selectedButton);
        }

        // console.log('EXAMPLES component executing');

        let tabContent = "Please select a Topic.";

        if (selectedTopic) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
        </div>);
        }
    return (
        <Section title="Examples" id="examples">
            <Tabs ButtonsContainer="menu" buttons={
                <>
                    <TabButton isSelected={selectedTopic === 'components'} 
                    onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} 
                    onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} 
                    onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} 
                    onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        {/* <menu>
            <TabButton isSelected={selectedTopic === 'components'} 
            onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} 
            onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} 
            onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} 
            onClick={() => handleSelect('state')}>State</TabButton>
        </menu> */}
        {/* {!selectedTopic ? <p>Please Select a Topic.</p> : 
        (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
        </div>)} */}
        {/* {!selectedTopic && <p>Please select a topic.</p>}
        {selectedTopic && (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
        </div>)} */}

        {/* {tabContent} */}
      </Section>
    );
}
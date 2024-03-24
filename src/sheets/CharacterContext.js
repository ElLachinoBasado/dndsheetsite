import React, { createContext, useState } from 'react';

const defaultCharacterData = {
	"Always Visible": {
		"Level": "",		
		"Character Name": "",
		"Race": "",		
		"HP (TEMP HP) / MAX HP": "",
		"Inspiration": "",
		"Status": "",
		"Vision": ""
	},
	"Ability Scores": {
		"Strength (Mod) [Save]": "",
		"Dexterity (Mod) [Save]": "",
		"Constitution (Mod) [Save]": "",
		"Intelligence (Mod) [Save]": "",
		"Wisdom (Mod) [Save]": "",
		"Charisma (Mod) [Save]": ""
	},	
	"Capabilities": {
		"Other Abilities": "",
		"Weapon Proficiency": "",
		"Armor Proficiency": "",
		"Tool Proficiency": "",
		"Language Proficiency": "",
		"Vehicle Proficiency": "",
		"Feats": ""
	}, 	
	"Skills": {
		"Proficiency Bonus": "",		
		"Acrobatics": "",
		"Animal Handling": "",
		"Arcana": "",
		"Athletics": "",
		"Deception": "",
		"History": "",
		"Insight": "",
		"Intimidation": "",
		"Investigation": "",
		"Medicine": "",
		"Nature": "",
		"Perception": "",
		"Performance": "",
		"Persuasion": "",
		"Religion": "",
		"Sleight of Hand": "",
		"Stealth": "",
		"Survival": ""
	},
	"Combat": {
		"Hit Dice": "",
		"Initiative": "",
		"AC": "",
		"Defenses": "",
		"Actions": "",
		"Bonus Actions": "",
		"Reactions": "",
		"Status Condition": "",
		"Speed": ""
	},
	
	"Items": {
		"Carrying Capacity": "",
		"Current Carry Weight": "",
		"Money": "",
		"Attuned Magical Items": "",
		"Equipped": "",
		"Carrying": ""		
	},
	
	"Spellcasting": {
		"Spell Attack Bonus": "",
		"Saving Throw DC": "",
		"Spells Prepared": "",
		"Cantrips": "",
		"Level 1 Spells": "",
		"Level 2 Spells": "",
		"Level 3 Spells": "",
		"Level 4 Spells": "",
		"Level 5 Spells": "",
		"Level 6 Spells": "",
		"Level 7 Spells": "",
		"Level 8 Spells": "",
		"Level 9 Spells": ""
	},		
	"Biography": {
		"Background": "",
		"Personality": "",
		"Gender": "",
		"Allies": "",
		"Organizations": "",
		"Deity": "",
		"Ideal": "",
		"Bond": "",
		"Flaw": "",
		"Age": "",
		"Class": ""
	},	
	"Appearance": {
		"Height": "",
		"Weight": "",
		"Skin": "",
		"Hair": "",
		"Eyes": ""
	}
}


const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
    let [characterData, setCharacterData] = useState(defaultCharacterData);

    // Log whenever characterData is updated
    console.log('Updated characterData:', characterData);

    return (
        <CharacterContext.Provider value={{ characterData, setCharacterData }}>
            {children}
        </CharacterContext.Provider>
    );
};

export default CharacterContext;

import React, { createContext, useState } from 'react';

const defaultCharacterData = {
	"Inspiration": {
		"Inspiration": ""
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
		"Movement Speed": "",
		"HP (TEMP HP) / MAX HP": "",
		"AC": "",
		"Defenses": "",
		"Actions": "",
		"Bonus Actions": "",
		"Reactions": "",
		"Status Condition": ""
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
		"Character Name": "",
		"Background": "",
		"Race": "",
		"Total Level": "",
		"Class(es)": "",
		"Personality": "",
		"Gender": "",
		"Allies": "",
		"Organizations": "",
		"Deity": "",
		"Ideal": "",
		"Bond": "",
		"Flaw": "",
		"Age": ""
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

var conditions      = require('./conditions');
var exhaustionLevel = require('./exhaustionLevel');
var indexInfo       = require('./indexInfo');
var items           = require('./items');
var feats           = require('./feats');
var spells          = require('./spells');

module.exports = {
    "en": {
        "translation": {
            "CONDITIONS" :                                  conditions.CONDITIONS,
            "EXHAUSTION_LEVELS" :                           exhaustionLevel.EXHAUSTION_LEVELS,
            "FEATS" :                                       feats.FEATS,
            "FEAT_ATTRIBUTES" :                             feats.FEAT_ATTRIBUTES,
            "INDEX" :                                       indexInfo.INDEX,
            "ITEMS" :                                       items.ITEMS,
            "ITEM_ATTRIBUTES" :                             items.ITEM_ATTRIBUTES,
            "SLOT_LEVEL" :                                  spells.SLOT_LEVEL,
            "SPELLS":                                       spells.SPELLS,
            "SPELL_ATTRIBUTES" :                            spells.SPELL_ATTRIBUTES,
            //json resources
            "CONTINUE_PROMPT" :                             " Now, what was your question?",
            "HELP_CARD_TITLE":                              "Ask the DM: Help",
            "HELP_MESSAGE":                                 "Ask the DM was created to provide quick reference to many of the mechanics of Dungeons and Dragons. The fastest way to interact with this application is by saying Alexa, Ask the DM, and follow with your question. For example say: Alexa ask the DM what is the range of fireball. As of version 2.2, you can roll multiple dice, and roll D20\'s with advantage and disadvantage. I have a working index, and can tell you what page in the players handbook you can find more information on many subjects. Also, you can get information about conditions, spells, feats, and items. For spells, you can get the following information: casting time, duration, range, components, spell type, damage and healing by level, short description and long description. For conditions and feats, simply include their name when asking for information. Items includes an exhaustive list of attributes like cost, type, or armor class.  If you are in interactive mode, say exit to quit.",
            "HELP_REPROMPT":                                "You can say things like, whats Death Ward, or you can say exit...Now, what can I help you with?",
            "INCOMPLETE_REQUEST":                           "I missed part of what you were saying, could you please repeat that?",
            "NOT_FOUND_MESSAGE":                            "I\'m sorry, I currently do not know ",
            "NOT_FOUND_WITH_OBJECT_NAME":                   "the info for %s",
            "NOT_FOUND_WITHOUT_OBJECT_NAME":                "the info for that.",
            "REPEAT_MESSAGE":                               "Try saying repeat.",
            "REPROMPT":                                     "What else can I help with?",
            "SKILL_NAME":                                   "Ask the DM",
            "STOP_MESSAGE":                                 "Goodbye!",
            "UNHANDLED" :                                   "I'm sorry, I didn't get that. You can try repeating that command. For help on what you can ask, say 'help'",
            //output strings
            "WELCOME_CARD_TITLE":                           "Ask the DM: Welcome!",
            "WELCOME_MESSAGE":                              "Welcome to Ask the DM. You can ask questions to get information about many of the mechanics in Dungeons and Dragons. For example, You can say things like, what\'s the range of fireball; or: how does blind affect me?... Please ask for help for a detailed explanation of this application. Now... what can I help you with?",
            "WELCOME_REPROMPT":                             "For instructions on what you can say, please say help me."     
        }
    }
};
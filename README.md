SubText - TreeHacks 2024 
====
![](https://s3.hedgedoc.org/demo/uploads/9ddc7c35-3703-45ec-aefb-83ae99e636de.gif)

[Demo Link](https://www.youtube.com/watch?v=o81wBBLvaso)
[Devpost Link](https://devpost.com/software/subtext)

## Inspiration
Deaf and hearing-impaired individuals rely heavily on reading subtitles to understand the words that their unimpaired counterparts can easily hear. However, these subtitles do little justice to anything more than the words spoken in the audio. Tone of voice and volume of expression are deeply important elements to human communcation, but those who cannot hear are constantly deprived of them. SubText is designed to create an means through which emotion can be read, not simply heard: to make the experience of emotion through recorded words accessible to all.


## What it does
SubText is, in a few words, "Emotive Captioning". The pioneer voice-to-text software intakes a video or an audio file, processes it, and provides real-time subtitles as the user plays the file back- but all that's been done before. During the processing phase, SubText also assesses the emotions and volume used throughout the entirety of the clip using state-of-the-art Artificial Intelligence. These audio-only cues are combined into an easily legible format through color and size, and added to the captions for seamless understanding!




## How we built it
- React with TypeScript - Client Application
- TailwindCSS, ChakraUI - UI/UX libraries
- Flask - Server
- Canva - Logo Design
- Figma - UI/UX prototyping
- Postman - API testing and documentation
- OpenAI - Whisper: Generated transcripts from audio files
- Hume.AI - Speech Prosody: Extract emotions from audio segments
- PyTube - YouTube video input and audio extraction
- PyDub - Audio segment generation
- Audio Splitter - Splitting audio files into equally-sized chunks 



## Challenges we ran into
* Splitting audio input into equally sized chunks. The problem with this was the occasional case of words falling into different chunks and having to determine which chunk they should go into.
* Different APIs we used had different ways of splitting and accepting audio. Hume.AI Streaming API required the audio input to be split into 5 second chunks, while OpenAI's Whisper API accepted the filepath of the audio file and split the audio by segments (sentences). This resulted in mismatching splits as not all segments had generated by OpenAI were 5 seconds long.
* Mapping the different calculations of each segment (emotion colors and volume levels) with the corresponding transcript segments. We used different APIs to generate the metrics, and since they returned outputs in different formats, it was challenging to match them
* Hume.AI limitations: 
    * limited documentation
    * incorrect analysis for audio clips with pauses longer than 5 seconds
        * The endpoint returns an error if it is unable to detect speech in a chunk. If an audio clip has a pause of at least 5 seconds, we are unable to use it in our application. The API has speech and emotion detection as part of the same endpoint, making it impossible for us to filter out long pauses in the audio file
* Being able to render subtitles for videos within proper time periods
*  Weighing between implementing complex designs and building functionality
*  Properly connecting backend and frontend together
* Not giving in to the temptation of forcing gen AI and LLMs into our solution without purpose.
* 


## Accomplishments that we're proud of
* Completing our first Hackathon! (for Aili, Jordan, and Syaam)
* Successfully pivoting ideas 12 hours into the Hackathon.
* Creating a real product with APIs we discovered during the hacking time.
* Successfully navigating the challenges we faced above


## What we learned
Plenty of Ethics Exploration: https://docs.google.com/document/d/1EHq3wqO3Zgtr3wZxcUb4N1-k1JRJVOEtKOvUJ5OsBH4/edit?usp=sharing

A **Lot** About Color Theory:
![](https://s3.hedgedoc.org/demo/uploads/4ec4f9d3-2e37-45d7-9af8-c4409ef2a926.png)



## What's next for Subtext
* Exploring implementation of different fonts for different emotions
![](https://s3.hedgedoc.org/demo/uploads/f8257140-0dfc-412f-9e0a-ce96e8216fe9.png)


"use client";
import React from "react";

import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
const FAQS = [
    {
        title: "What languages are supported for media files transcription?",
        desc:
            "In this service, you can transcribe audio in Abkhaz, Afrikaans, Arabic, Gulf, Arabic, Modern Standard, Armenian, Asturian, Azerbaijani, Bashkir, Basque, Belarusian, Bengali, Bosnian, Bulgarian, Catalan, Central Kurdish, Iran, Central Kurdish, Iraq, Chinese, Simplified, Chinese, Traditional, Croatian, Czech, Danish, Dutch, English, Australian, English, British, English, Indian, English, Irish, English, New Zealand, English, Scottish, English, South African, English, US, English, Welsh, Estonian, Farsi, Finnish, French, French, Canadian, Galician, Georgian, German, German, Swiss, Greek, Gujarati, Hausa, Hebrew, Hindi, Indian, Hungarian, Icelandic, Indonesian, Italian, Japanese, Kabyle, Kannada, Kazakh, Kinyarwanda, Korean, Kyrgyz, Latvian, Lithuanian, Luganda, Macedonian, Malay, Malayalam, Maltese, Marathi, Meadow Mari, Mongolian, Norwegian Bokmål, Odia/Oriya, Pashto, Polish, Portuguese, Portuguese, Brazilian, Punjabi, Romanian, Russian, Serbian, Sinhala, Slovak, Slovenian, Somali, Spanish, Spanish, US, Sundanese, Swahili, Kenya, Swahili, Burundi, Swahili, Rwanda, Swahili, Tanzania, Swahili, Uganda, Swedish, Tagalog/Filipino, Tamil, Tatar, Telugu, Thai, Turkish, Ukrainian, Uyghur, Uzbek, Vietnamese, Welsh, Wolof, and Zulu.",
    },
    {
        title: "What languages are supported for translation?",
        desc:
            "In this service, you can translate content in Afrikaans, Albanian, Amharic, Arabic, Armenian, Azerbaijani, Bengali, Bosnian, Bulgarian, Canadian French, Catalan, Chinese, Chinese Traditional, Croatian, Czech, Danish, Dari, Dutch, English, Estonian, Finnish, French, Georgian, German, Greek, Gujarati, Haitian Creole, Hausa, Hebrew, Hindi, Hungarian, Icelandic, Indonesian, Irish, Italian, Japanese, Kannada, Kazakh, Korean, Latvian, Lithuanian, Macedonian, Malay, Malayalam, Maltese, Marathi, Mexican Spanish, Mongolian, Norwegian, Pashto, Persian, Polish, Portugal Portuguese, Portuguese, Punjabi, Romanian, Russian, Serbian, Sinhala, Slovak, Slovenian, Somali, Spanish, Swahili, Swedish, Tagalog, Tamil, Telugu, Thai, Turkish, Ukrainian, Urdu, Uzbek, Vietnamese, and Welsh.",
    },
    {
        title: "What AI & machine learning services are in there?",
        desc: "Transcribe, Translate, Summarize & Comprehend."
    },
    {
        title:
            "What summarization model is being used?",
        desc: "Meta Llama 3 70B Instruct"
    },
    {
        title:
            "Supported media files format for transcription?",
        desc: "AMR, FLAC, M4A, MP3, MP4, Ogg, WebM, WAV and more"
    },
    {
        title: "Is this service free?",
        desc: "Yes, it is completely free."
    }
];

export function Faq() {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

    return (
        <section className="px-8 py-10">
            <div className="container mx-auto">
                <div className="text-center">
                    <Typography placeholder={null}
                        onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                        variant="h1" color="blue-gray" className="mb-20">
                        Frequently Asked Questions
                    </Typography>
                    {/* <Typography
            variant="lead" placeholder={null}

            className="mx-auto mb-24 w-full max-w-2xl !text-gray-500"
          >
            Are you ready to embrace a smarter way of learning? Join [Platform Name] today and witness the transformation in your academic journey. Be part of a community that values knowledge, competition, and success.
          </Typography> */}
                </div>
                <div className="mx-auto lg:max-w-screen-lg lg:px-20">
                    {FAQS.map(({ title, desc }, key) => (
                        <Accordion
                            key={key} placeholder={null}
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}

                            open={open === key + 1}
                            onClick={() => handleOpen(key + 1)}
                        >
                            <AccordionHeader placeholder={null}
                                className="text-left text-gray-900"
                                onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                            >
                                {title}
                            </AccordionHeader>
                            <AccordionBody>
                                <Typography
                                    color="blue-gray" placeholder={null}
                                    onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                    className="font-normal text-gray-500"
                                >
                                    {desc}
                                </Typography>
                            </AccordionBody>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default Faq;

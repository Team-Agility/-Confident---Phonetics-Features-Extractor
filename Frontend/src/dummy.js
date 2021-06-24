export const dummySteps = {
    "completed": true,
    "status": "Completed",
    "total_steps": 5,
    "completed_steps": 5,
    "all_steps": ["Input", "Transcript Generate", "Feature Extraction", "Confidence Level", "Output"],
    "steps": [
        {
            "type": "audio",
            "step": "Input",
            "data": "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
        },
        {
            "type": "transcrpt",
            "step": "Transcript Generate",
            "data": [
                {
                    "content": "Hi",
                    "end_time": 77.74,
                    "is_punction": false,
                    "speaker_id": "A",
                    "start_time": 77.44
                },
                {
                    "content": ",",
                    "end_time": 77.74,
                    "is_punction": true,
                    "speaker_id": "A",
                    "start_time": 77.74
                },
                {
                    "content": "I'm",
                    "end_time": 78.16,
                    "is_punction": false,
                    "speaker_id": "A",
                    "start_time": 77.74
                }
            ]
        },
        {
            "type": "phoneticsFeatureExtraction",
            "step": "Feature Extraction",
            "data": [
                {
                    "id": 1,
                    "act": "Hi, I'm David and I'm supposed to be an industrial designer.",
                    "start_time": 77.44,
                    "end_time": 80.87,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 1221663088.8687,
                        "speech_rate": 4.95627,
                        "articulation_rate": 4.95627,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.43,
                        "articulation_rate": 4.95627,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 3.43
                    }
                },
                {
                    "id": 2,
                    "act": "Um, I just got the project announcement about what the project is.",
                    "start_time": 132.57,
                    "end_time": 136.68,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 10140926184.57428,
                        "speech_rate": 3.89294,
                        "articulation_rate": 3.89294,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 4.11,
                        "articulation_rate": 3.89294,
                        "silent_pauses": 0,
                        "total_syllables": 16,
                        "phonation_time": 4.11
                    }
                },
                {
                    "id": 3,
                    "act": "Designing a remote control.",
                    "start_time": 136.68,
                    "end_time": 138.2,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 2620370444.11668,
                        "speech_rate": 5.26316,
                        "articulation_rate": 5.26316,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.52,
                        "articulation_rate": 5.26316,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.52
                    }
                },
                {
                    "id": 4,
                    "act": "That's about it, didn't get anything else.",
                    "start_time": 138.2,
                    "end_time": 140.77,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 279588584.93521,
                        "speech_rate": 3.89105,
                        "articulation_rate": 3.89105,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.57,
                        "articulation_rate": 3.89105,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 2.57
                    }
                },
                {
                    "id": 5,
                    "act": "Did you get the same thing?",
                    "start_time": 140.77,
                    "end_time": 141.98,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 10135397563.80354,
                        "speech_rate": 4.13223,
                        "articulation_rate": 4.13223,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.21,
                        "articulation_rate": 4.13223,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.21
                    }
                },
                {
                    "id": 8,
                    "act": "Cool.",
                    "start_time": 275.83,
                    "end_time": 276.15,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 2599871226.455,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.125,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.32,
                        "articulation_rate": 3.125,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.32
                    }
                },
                {
                    "id": 9,
                    "act": "There's too much gear.",
                    "start_time": 280.75,
                    "end_time": 282.65,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 159366324.37805,
                        "speech_rate": 2.63158,
                        "articulation_rate": 2.63158,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.9,
                        "articulation_rate": 2.63158,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.9
                    }
                },
                {
                    "id": 11,
                    "act": "Okay.",
                    "start_time": 293.26,
                    "end_time": 294.25,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 182645995.71613,
                        "speech_rate": 2.0202,
                        "articulation_rate": 2.0202,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.99,
                        "articulation_rate": 2.0202,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.99
                    }
                },
                {
                    "id": 12,
                    "act": "Can't draw.",
                    "start_time": 309.38,
                    "end_time": 310.85,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 276828337.69629,
                        "speech_rate": 1.36054,
                        "articulation_rate": 1.45773,
                        "phonation_time_ratio": 0.93333,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.049
                    },
                    "phonetics_features": {
                        "total_time": 1.47,
                        "articulation_rate": 1.45773,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 1.372
                    }
                },
                {
                    "id": 13,
                    "act": "Um.",
                    "start_time": 312.06,
                    "end_time": 312.84,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 217913722.00267,
                        "speech_rate": 1.28205,
                        "articulation_rate": 1.31579,
                        "phonation_time_ratio": 0.97436,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.02
                    },
                    "phonetics_features": {
                        "total_time": 0.78,
                        "articulation_rate": 1.31579,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.76
                    }
                },
                {
                    "id": 14,
                    "act": "Yeah.",
                    "start_time": 313.09,
                    "end_time": 313.52,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 1203777365.49706,
                        "speech_rate": 2.32558,
                        "articulation_rate": 2.32558,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.43,
                        "articulation_rate": 2.32558,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.43
                    }
                },
                {
                    "id": 15,
                    "act": "Um, well anyway,",
                    "start_time": 318.58,
                    "end_time": 321.53,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 490147195.28832,
                        "speech_rate": 1.69492,
                        "articulation_rate": 1.69492,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.95,
                        "articulation_rate": 1.69492,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 2.95
                    }
                },
                {
                    "id": 16,
                    "act": "I don't know, it's just the first animal I can think off the top of my head.",
                    "start_time": 321.53,
                    "end_time": 324.11,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 226145590.31086,
                        "speech_rate": 6.58915,
                        "articulation_rate": 6.58915,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.58,
                        "articulation_rate": 6.58915,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 2.58
                    }
                },
                {
                    "id": 17,
                    "act": "Um. Yes. Big reason is 'cause I'm allergic to most animals.",
                    "start_time": 324.11,
                    "end_time": 327.86,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 490848792.98222,
                        "speech_rate": 4.26667,
                        "articulation_rate": 4.26667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.75,
                        "articulation_rate": 4.26667,
                        "silent_pauses": 0,
                        "total_syllables": 16,
                        "phonation_time": 3.75
                    }
                },
                {
                    "id": 18,
                    "act": "Allergic to animal fur,",
                    "start_time": 327.86,
                    "end_time": 328.76,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 153976773.10716,
                        "speech_rate": 8.88889,
                        "articulation_rate": 8.88889,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.9,
                        "articulation_rate": 8.88889,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 0.9
                    }
                },
                {
                    "id": 19,
                    "act": "so um fish was a natural choice.",
                    "start_time": 328.76,
                    "end_time": 331.57,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 10139833769.57715,
                        "speech_rate": 3.20285,
                        "articulation_rate": 3.20285,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.81,
                        "articulation_rate": 3.20285,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 2.81
                    }
                },
                {
                    "id": 20,
                    "act": "Um, yeah,",
                    "start_time": 332.03,
                    "end_time": 333.1,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 274482259.33729,
                        "speech_rate": 1.86916,
                        "articulation_rate": 1.9305,
                        "phonation_time_ratio": 0.96822,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.017
                    },
                    "phonetics_features": {
                        "total_time": 1.07,
                        "articulation_rate": 1.9305,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 1.036
                    }
                },
                {
                    "id": 21,
                    "act": "and I kind of like whales.",
                    "start_time": 333.1,
                    "end_time": 334.32,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 2618867764.25204,
                        "speech_rate": 5.7377,
                        "articulation_rate": 5.7377,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.22,
                        "articulation_rate": 5.7377,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.22
                    }
                },
                {
                    "id": 22,
                    "act": "They come in and go eat everything in sight.",
                    "start_time": 334.32,
                    "end_time": 337.7,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 227032168.37102,
                        "speech_rate": 3.5503,
                        "articulation_rate": 3.5503,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.38,
                        "articulation_rate": 3.5503,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 3.38
                    }
                },
                {
                    "id": 23,
                    "act": "And they're quite harmless and mild and interesting.",
                    "start_time": 338.22,
                    "end_time": 341.52,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 161508553.6374,
                        "speech_rate": 3.63636,
                        "articulation_rate": 3.63636,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.3,
                        "articulation_rate": 3.63636,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 3.3
                    }
                },
                {
                    "id": 24,
                    "act": "Tail's a bit big, I think.",
                    "start_time": 353.86,
                    "end_time": 355.11,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 485791697.65403,
                        "speech_rate": 4.8,
                        "articulation_rate": 4.8,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.25,
                        "articulation_rate": 4.8,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.25
                    }
                },
                {
                    "id": 28,
                    "act": "It's an after dinner dog then.",
                    "start_time": 442.02,
                    "end_time": 443.21,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 184193840.5159,
                        "speech_rate": 6.72269,
                        "articulation_rate": 6.72269,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.19,
                        "articulation_rate": 6.72269,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.19
                    }
                },
                {
                    "id": 30,
                    "act": "Hmm.",
                    "start_time": 565.05,
                    "end_time": 565.32,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 252401129.98363,
                        "speech_rate": 3.7037,
                        "articulation_rate": 3.7037,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.27,
                        "articulation_rate": 3.7037,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.27
                    }
                },
                {
                    "id": 31,
                    "act": "It does make sense from maybe the design point of view",
                    "start_time": 571.74,
                    "end_time": 574.91,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 280299575.17282,
                        "speech_rate": 3.47003,
                        "articulation_rate": 3.47003,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.17,
                        "articulation_rate": 3.47003,
                        "silent_pauses": 0,
                        "total_syllables": 11,
                        "phonation_time": 3.17
                    }
                },
                {
                    "id": 32,
                    "act": "'cause you have more complicated characters like European languages, then you need more buttons.",
                    "start_time": 574.91,
                    "end_time": 580.21,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 7.737125245533627e+29,
                        "speech_rate": 4.5283,
                        "articulation_rate": 6.65927,
                        "phonation_time_ratio": 0.68,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.37736,
                        "MPD": 0.07067
                    },
                    "phonetics_features": {
                        "total_time": 5.3,
                        "articulation_rate": 6.65927,
                        "silent_pauses": 2,
                        "total_syllables": 24,
                        "phonation_time": 3.604
                    }
                },
                {
                    "id": 33,
                    "act": "So, possibly.",
                    "start_time": 581.3,
                    "end_time": 582.52,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 2618867764.25204,
                        "speech_rate": 3.27869,
                        "articulation_rate": 4.7619,
                        "phonation_time_ratio": 0.68852,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.81967,
                        "MPD": 0.095
                    },
                    "phonetics_features": {
                        "total_time": 1.22,
                        "articulation_rate": 4.7619,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 0.84
                    }
                },
                {
                    "id": 34,
                    "act": "Hmm.",
                    "start_time": 732.32,
                    "end_time": 732.54,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 2590105601.455,
                        "speech_rate": 4.54545,
                        "articulation_rate": 4.54545,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.22,
                        "articulation_rate": 4.54545,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.22
                    }
                },
                {
                    "id": 35,
                    "act": "Yeah.",
                    "start_time": 777.7,
                    "end_time": 778.02,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 2599871226.455,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.125,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.32,
                        "articulation_rate": 3.125,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.32
                    }
                },
                {
                    "id": 36,
                    "act": "And you keep losing them.",
                    "start_time": 903.08,
                    "end_time": 903.98,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 153976773.10716,
                        "speech_rate": 6.66667,
                        "articulation_rate": 6.66667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.9,
                        "articulation_rate": 6.66667,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 0.9
                    }
                },
                {
                    "id": 37,
                    "act": "Finding them is really a pain, you know.",
                    "start_time": 906.45,
                    "end_time": 908.59,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 722970241.7739,
                        "speech_rate": 4.6729,
                        "articulation_rate": 4.84966,
                        "phonation_time_ratio": 0.96355,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0078
                    },
                    "phonetics_features": {
                        "total_time": 2.14,
                        "articulation_rate": 4.84966,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 2.062
                    }
                },
                {
                    "id": 38,
                    "act": "I mean it's usually quite small,",
                    "start_time": 908.59,
                    "end_time": 910.62,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 1219729687.39084,
                        "speech_rate": 3.94089,
                        "articulation_rate": 5.8309,
                        "phonation_time_ratio": 0.67586,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.08225
                    },
                    "phonetics_features": {
                        "total_time": 2.03,
                        "articulation_rate": 5.8309,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.372
                    }
                },
                {
                    "id": 39,
                    "act": "or when you want it right, it slipped behind the couch",
                    "start_time": 910.62,
                    "end_time": 912.9,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 225656226.69307,
                        "speech_rate": 5.26316,
                        "articulation_rate": 5.26316,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.28,
                        "articulation_rate": 5.26316,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 2.28
                    }
                },
                {
                    "id": 40,
                    "act": "or it's kicked under the table.",
                    "start_time": 912.9,
                    "end_time": 914.44,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 721248421.10266,
                        "speech_rate": 4.54545,
                        "articulation_rate": 4.54545,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.54,
                        "articulation_rate": 4.54545,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.54
                    }
                },
                {
                    "id": 41,
                    "act": "You know.",
                    "start_time": 915.45,
                    "end_time": 916.11,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 349559584.28137,
                        "speech_rate": 3.0303,
                        "articulation_rate": 3.0303,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.66,
                        "articulation_rate": 3.0303,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.66
                    }
                },
                {
                    "id": 42,
                    "act": "Yep.",
                    "start_time": 993.88,
                    "end_time": 994.02,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 676020408.12245,
                        "speech_rate": 7.14286,
                        "articulation_rate": 7.14286,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.14,
                        "articulation_rate": 7.14286,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.14
                    }
                },
                {
                    "id": 43,
                    "act": "Mm-hmm.",
                    "start_time": 1056.93,
                    "end_time": 1057.09,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 316840277.88889,
                        "speech_rate": 6.25,
                        "articulation_rate": 6.25,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.16,
                        "articulation_rate": 6.25,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.16
                    }
                },
                {
                    "id": 44,
                    "act": "I think one factor would be production cost.",
                    "start_time": 1084.36,
                    "end_time": 1086.91,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 489634540.14538,
                        "speech_rate": 3.92157,
                        "articulation_rate": 4.08497,
                        "phonation_time_ratio": 0.96,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0102
                    },
                    "phonetics_features": {
                        "total_time": 2.55,
                        "articulation_rate": 4.08497,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 2.448
                    }
                },
                {
                    "id": 45,
                    "act": "Because there's a cap there,",
                    "start_time": 1087.57,
                    "end_time": 1088.74,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 275212772.88028,
                        "speech_rate": 5.98291,
                        "articulation_rate": 6.14035,
                        "phonation_time_ratio": 0.97436,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.00429
                    },
                    "phonetics_features": {
                        "total_time": 1.17,
                        "articulation_rate": 6.14035,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.14
                    }
                },
                {
                    "id": 46,
                    "act": "so um depends on how much you can cram into that price. Um.",
                    "start_time": 1088.74,
                    "end_time": 1094.9,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 362010696.12475,
                        "speech_rate": 2.43506,
                        "articulation_rate": 3.66211,
                        "phonation_time_ratio": 0.66494,
                        "mean_length_of_runs": 0.2,
                        "silent_pauses_rate": 0.48701,
                        "MPD": 0.1376
                    },
                    "phonetics_features": {
                        "total_time": 6.16,
                        "articulation_rate": 3.66211,
                        "silent_pauses": 3,
                        "total_syllables": 15,
                        "phonation_time": 4.096
                    }
                },
                {
                    "id": 47,
                    "act": "I think that that's the main factor.",
                    "start_time": 1096.03,
                    "end_time": 1098.43,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 1.9342813113834067e+29,
                        "speech_rate": 2.91667,
                        "articulation_rate": 2.91667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.4,
                        "articulation_rate": 2.91667,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 2.4
                    }
                },
                {
                    "id": 48,
                    "act": "Cool.",
                    "start_time": 1109.23,
                    "end_time": 1109.45,
                    "speaker_id": "A",
                    "measures": {
                        "short_term_energy": 2590105601.455,
                        "speech_rate": 4.54545,
                        "articulation_rate": 4.54545,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.22,
                        "articulation_rate": 4.54545,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.22
                    }
                },
                {
                    "id": 1,
                    "act": "Okay",
                    "start_time": 50.42,
                    "end_time": 50.99,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1221663088.8687,
                        "speech_rate": 4.95627,
                        "articulation_rate": 4.95627,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.43,
                        "articulation_rate": 4.95627,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 3.43
                    }
                },
                {
                    "id": 2,
                    "act": "Right",
                    "start_time": 53.56,
                    "end_time": 53.96,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10140926184.57428,
                        "speech_rate": 3.89294,
                        "articulation_rate": 3.89294,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 4.11,
                        "articulation_rate": 3.89294,
                        "silent_pauses": 0,
                        "total_syllables": 16,
                        "phonation_time": 4.11
                    }
                },
                {
                    "id": 3,
                    "act": "Um well this is the kick-off meeting for our our project.",
                    "start_time": 55.98,
                    "end_time": 60.35,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2620370444.11668,
                        "speech_rate": 5.26316,
                        "articulation_rate": 5.26316,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.52,
                        "articulation_rate": 5.26316,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.52
                    }
                },
                {
                    "id": 16,
                    "act": "Um and um",
                    "start_time": 60.35,
                    "end_time": 64.16,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 226145590.31086,
                        "speech_rate": 6.58915,
                        "articulation_rate": 6.58915,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.58,
                        "articulation_rate": 6.58915,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 2.58
                    }
                },
                {
                    "id": 17,
                    "act": "this is just what we're gonna be doing over the next twenty five minutes.",
                    "start_time": 64.16,
                    "end_time": 67.55,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 490848792.98222,
                        "speech_rate": 4.26667,
                        "articulation_rate": 4.26667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.75,
                        "articulation_rate": 4.26667,
                        "silent_pauses": 0,
                        "total_syllables": 16,
                        "phonation_time": 3.75
                    }
                },
                {
                    "id": 6,
                    "act": "Um so first of all, just to kind of make sure that we all know each other,",
                    "start_time": 67.55,
                    "end_time": 72.79,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 727134012.2246,
                        "speech_rate": 3.24427,
                        "articulation_rate": 3.87774,
                        "phonation_time_ratio": 0.83664,
                        "mean_length_of_runs": 0.05882,
                        "silent_pauses_rate": 0.19084,
                        "MPD": 0.05035
                    },
                    "phonetics_features": {
                        "total_time": 5.24,
                        "articulation_rate": 3.87774,
                        "silent_pauses": 1,
                        "total_syllables": 17,
                        "phonation_time": 4.384
                    }
                },
                {
                    "id": 9,
                    "act": "I'm Laura and I'm the project manager.",
                    "start_time": 72.79,
                    "end_time": 74.42,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 159366324.37805,
                        "speech_rate": 2.63158,
                        "articulation_rate": 2.63158,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.9,
                        "articulation_rate": 2.63158,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.9
                    }
                },
                {
                    "id": 7,
                    "act": "Do you want to introduce yourself again?",
                    "start_time": 74.42,
                    "end_time": 77.29,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 279980592.7542,
                        "speech_rate": 3.83275,
                        "articulation_rate": 5.90763,
                        "phonation_time_ratio": 0.64878,
                        "mean_length_of_runs": 0.09091,
                        "silent_pauses_rate": 0.34843,
                        "MPD": 0.09164
                    },
                    "phonetics_features": {
                        "total_time": 2.87,
                        "articulation_rate": 5.90763,
                        "silent_pauses": 1,
                        "total_syllables": 11,
                        "phonation_time": 1.862
                    }
                },
                {
                    "id": 8,
                    "act": "Okay.",
                    "start_time": 80.81,
                    "end_time": 81.26,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2599871226.455,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.125,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.32,
                        "articulation_rate": 3.125,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.32
                    }
                },
                {
                    "id": 10,
                    "act": "Great.",
                    "start_time": 89.3,
                    "end_time": 90.01,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10130190890.3413,
                        "speech_rate": 1.40845,
                        "articulation_rate": 1.46628,
                        "phonation_time_ratio": 0.96056,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.028
                    },
                    "phonetics_features": {
                        "total_time": 0.71,
                        "articulation_rate": 1.46628,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.682
                    }
                },
                {
                    "id": 11,
                    "act": "Okay. Um",
                    "start_time": 90.01,
                    "end_time": 92.79,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 182645995.71613,
                        "speech_rate": 2.0202,
                        "articulation_rate": 2.0202,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.99,
                        "articulation_rate": 2.0202,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.99
                    }
                },
                {
                    "id": 12,
                    "act": "so we're designing a new remote control and um",
                    "start_time": 92.79,
                    "end_time": 96.34,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 276828337.69629,
                        "speech_rate": 1.36054,
                        "articulation_rate": 1.45773,
                        "phonation_time_ratio": 0.93333,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.049
                    },
                    "phonetics_features": {
                        "total_time": 1.47,
                        "articulation_rate": 1.45773,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 1.372
                    }
                },
                {
                    "id": 13,
                    "act": "Oh I have to record who's here actually.",
                    "start_time": 96.34,
                    "end_time": 98.57,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 217913722.00267,
                        "speech_rate": 1.28205,
                        "articulation_rate": 1.31579,
                        "phonation_time_ratio": 0.97436,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.02
                    },
                    "phonetics_features": {
                        "total_time": 0.78,
                        "articulation_rate": 1.31579,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.76
                    }
                },
                {
                    "id": 14,
                    "act": "So that's David, Andrew and Craig, isn't it?",
                    "start_time": 98.57,
                    "end_time": 101.76,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1203777365.49706,
                        "speech_rate": 2.32558,
                        "articulation_rate": 2.32558,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.43,
                        "articulation_rate": 2.32558,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.43
                    }
                },
                {
                    "id": 15,
                    "act": "And you all arrived on time.",
                    "start_time": 104.89,
                    "end_time": 106.58,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 490147195.28832,
                        "speech_rate": 1.69492,
                        "articulation_rate": 1.69492,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.95,
                        "articulation_rate": 1.69492,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 2.95
                    }
                },
                {
                    "id": 18,
                    "act": "Um yeah so des uh design a new remote control.",
                    "start_time": 108.96,
                    "end_time": 111.72,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 153976773.10716,
                        "speech_rate": 8.88889,
                        "articulation_rate": 8.88889,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.9,
                        "articulation_rate": 8.88889,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 0.9
                    }
                },
                {
                    "id": 19,
                    "act": "Um, as you can see it's supposed to be original, trendy and user friendly.",
                    "start_time": 111.72,
                    "end_time": 116.66,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10139833769.57715,
                        "speech_rate": 3.20285,
                        "articulation_rate": 3.20285,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.81,
                        "articulation_rate": 3.20285,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 2.81
                    }
                },
                {
                    "id": 21,
                    "act": "Um so that's kind of our our brief, as it were.",
                    "start_time": 116.66,
                    "end_time": 120.98,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2618867764.25204,
                        "speech_rate": 5.7377,
                        "articulation_rate": 5.7377,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.22,
                        "articulation_rate": 5.7377,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.22
                    }
                },
                {
                    "id": 22,
                    "act": "Um and so there are three different stages to the design.",
                    "start_time": 120.98,
                    "end_time": 126.12,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 227032168.37102,
                        "speech_rate": 3.5503,
                        "articulation_rate": 3.5503,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.38,
                        "articulation_rate": 3.5503,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 3.38
                    }
                },
                {
                    "id": 23,
                    "act": "Um I'm not really sure what what you guys have already received um in your emails.",
                    "start_time": 126.12,
                    "end_time": 131.36,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 161508553.6374,
                        "speech_rate": 3.63636,
                        "articulation_rate": 3.63636,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.3,
                        "articulation_rate": 3.63636,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 3.3
                    }
                },
                {
                    "id": 24,
                    "act": "What did you get?",
                    "start_time": 131.36,
                    "end_time": 132.03,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 485791697.65403,
                        "speech_rate": 4.8,
                        "articulation_rate": 4.8,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.25,
                        "articulation_rate": 4.8,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.25
                    }
                },
                {
                    "id": 20,
                    "act": "Mm-hmm.",
                    "start_time": 135.08,
                    "end_time": 135.44,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 274482259.33729,
                        "speech_rate": 1.86916,
                        "articulation_rate": 1.9305,
                        "phonation_time_ratio": 0.96822,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.017
                    },
                    "phonetics_features": {
                        "total_time": 1.07,
                        "articulation_rate": 1.9305,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 1.036
                    }
                },
                {
                    "id": 25,
                    "act": "Is that what everybody got?",
                    "start_time": 140.1,
                    "end_time": 141.53,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1217782264.15025,
                        "speech_rate": 6.29371,
                        "articulation_rate": 10.04464,
                        "phonation_time_ratio": 0.62657,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.05933
                    },
                    "phonetics_features": {
                        "total_time": 1.43,
                        "articulation_rate": 10.04464,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 0.896
                    }
                },
                {
                    "id": 29,
                    "act": "Okay.",
                    "start_time": 141.53,
                    "end_time": 142.66,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1216066937.37851,
                        "speech_rate": 1.76991,
                        "articulation_rate": 4.42478,
                        "phonation_time_ratio": 0.4,
                        "mean_length_of_runs": 0.5,
                        "silent_pauses_rate": 0.88496,
                        "MPD": 0.339
                    },
                    "phonetics_features": {
                        "total_time": 1.13,
                        "articulation_rate": 4.42478,
                        "silent_pauses": 1,
                        "total_syllables": 2,
                        "phonation_time": 0.452
                    }
                },
                {
                    "id": 26,
                    "act": "Um.",
                    "start_time": 142.66,
                    "end_time": 144.43,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 277911791.06644,
                        "speech_rate": 0.56497,
                        "articulation_rate": 1.18765,
                        "phonation_time_ratio": 0.47571,
                        "mean_length_of_runs": 1.0,
                        "silent_pauses_rate": 0.56497,
                        "MPD": 0.928
                    },
                    "phonetics_features": {
                        "total_time": 1.77,
                        "articulation_rate": 1.18765,
                        "silent_pauses": 1,
                        "total_syllables": 1,
                        "phonation_time": 0.842
                    }
                },
                {
                    "id": 28,
                    "act": "So we're gonna have like individual work and then a meeting about it.",
                    "start_time": 144.43,
                    "end_time": 147.92,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 184193840.5159,
                        "speech_rate": 6.72269,
                        "articulation_rate": 6.72269,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.19,
                        "articulation_rate": 6.72269,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.19
                    }
                },
                {
                    "id": 31,
                    "act": "And repeat that process three times.",
                    "start_time": 147.92,
                    "end_time": 151.79,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 280299575.17282,
                        "speech_rate": 3.47003,
                        "articulation_rate": 3.47003,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.17,
                        "articulation_rate": 3.47003,
                        "silent_pauses": 0,
                        "total_syllables": 11,
                        "phonation_time": 3.17
                    }
                },
                {
                    "id": 32,
                    "act": "Um and at this point we get try out the whiteboard over there.",
                    "start_time": 151.79,
                    "end_time": 158.41,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 7.737125245533627e+29,
                        "speech_rate": 4.5283,
                        "articulation_rate": 6.65927,
                        "phonation_time_ratio": 0.68,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.37736,
                        "MPD": 0.07067
                    },
                    "phonetics_features": {
                        "total_time": 5.3,
                        "articulation_rate": 6.65927,
                        "silent_pauses": 2,
                        "total_syllables": 24,
                        "phonation_time": 3.604
                    }
                },
                {
                    "id": 27,
                    "act": "Um.",
                    "start_time": 158.41,
                    "end_time": 159.59,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 221821800.40047,
                        "speech_rate": 0.84746,
                        "articulation_rate": 1.67224,
                        "phonation_time_ratio": 0.50678,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.582
                    },
                    "phonetics_features": {
                        "total_time": 1.18,
                        "articulation_rate": 1.67224,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.598
                    }
                },
                {
                    "id": 33,
                    "act": "So uh you get to draw your favourite animal and sum up your favourite characteristics of it.",
                    "start_time": 159.59,
                    "end_time": 165.91,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2618867764.25204,
                        "speech_rate": 3.27869,
                        "articulation_rate": 4.7619,
                        "phonation_time_ratio": 0.68852,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.81967,
                        "MPD": 0.095
                    },
                    "phonetics_features": {
                        "total_time": 1.22,
                        "articulation_rate": 4.7619,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 0.84
                    }
                },
                {
                    "id": 30,
                    "act": "So who would like to go first?",
                    "start_time": 165.91,
                    "end_time": 167.31,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 252401129.98363,
                        "speech_rate": 3.7037,
                        "articulation_rate": 3.7037,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.27,
                        "articulation_rate": 3.7037,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.27
                    }
                },
                {
                    "id": 34,
                    "act": "Very good.",
                    "start_time": 167.84,
                    "end_time": 168.84,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2590105601.455,
                        "speech_rate": 4.54545,
                        "articulation_rate": 4.54545,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.22,
                        "articulation_rate": 4.54545,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.22
                    }
                },
                {
                    "id": 35,
                    "act": "Mm-hmm.",
                    "start_time": 183.26,
                    "end_time": 184.24,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2599871226.455,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.125,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.32,
                        "articulation_rate": 3.125,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.32
                    }
                },
                {
                    "id": 37,
                    "act": "Yeah. Yeah.",
                    "start_time": 215.95,
                    "end_time": 216.77,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 722970241.7739,
                        "speech_rate": 4.6729,
                        "articulation_rate": 4.84966,
                        "phonation_time_ratio": 0.96355,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0078
                    },
                    "phonetics_features": {
                        "total_time": 2.14,
                        "articulation_rate": 4.84966,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 2.062
                    }
                },
                {
                    "id": 38,
                    "act": "Right.",
                    "start_time": 243.4,
                    "end_time": 244.71,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1219729687.39084,
                        "speech_rate": 3.94089,
                        "articulation_rate": 5.8309,
                        "phonation_time_ratio": 0.67586,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.08225
                    },
                    "phonetics_features": {
                        "total_time": 2.03,
                        "articulation_rate": 5.8309,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.372
                    }
                },
                {
                    "id": 39,
                    "act": "Lovely.",
                    "start_time": 244.71,
                    "end_time": 245.7,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 225656226.69307,
                        "speech_rate": 5.26316,
                        "articulation_rate": 5.26316,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.28,
                        "articulation_rate": 5.26316,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 2.28
                    }
                },
                {
                    "id": 41,
                    "act": "Right.",
                    "start_time": 275.67,
                    "end_time": 276.02,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 349559584.28137,
                        "speech_rate": 3.0303,
                        "articulation_rate": 3.0303,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.66,
                        "articulation_rate": 3.0303,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.66
                    }
                },
                {
                    "id": 42,
                    "act": "You can take as long over this as you like,",
                    "start_time": 285.96,
                    "end_time": 287.73,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 676020408.12245,
                        "speech_rate": 7.14286,
                        "articulation_rate": 7.14286,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.14,
                        "articulation_rate": 7.14286,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.14
                    }
                },
                {
                    "id": 103,
                    "act": "because we haven't got an awful lot to discuss.",
                    "start_time": 287.73,
                    "end_time": 290.31,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 226145590.31086,
                        "speech_rate": 4.65116,
                        "articulation_rate": 5.94059,
                        "phonation_time_ratio": 0.78295,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.3876,
                        "MPD": 0.04667
                    },
                    "phonetics_features": {
                        "total_time": 2.58,
                        "articulation_rate": 5.94059,
                        "silent_pauses": 1,
                        "total_syllables": 12,
                        "phonation_time": 2.02
                    }
                },
                {
                    "id": 43,
                    "act": "Ok oh",
                    "start_time": 290.31,
                    "end_time": 290.59,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 316840277.88889,
                        "speech_rate": 6.25,
                        "articulation_rate": 6.25,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.16,
                        "articulation_rate": 6.25,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.16
                    }
                },
                {
                    "id": 104,
                    "act": "we do we do",
                    "start_time": 290.59,
                    "end_time": 291.76,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 275212772.88028,
                        "speech_rate": 1.7094,
                        "articulation_rate": 2.77008,
                        "phonation_time_ratio": 0.61709,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.224
                    },
                    "phonetics_features": {
                        "total_time": 1.17,
                        "articulation_rate": 2.77008,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.722
                    }
                },
                {
                    "id": 44,
                    "act": "Don't feel like you're in a rush, anyway.",
                    "start_time": 291.76,
                    "end_time": 293.37,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 489634540.14538,
                        "speech_rate": 3.92157,
                        "articulation_rate": 4.08497,
                        "phonation_time_ratio": 0.96,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0102
                    },
                    "phonetics_features": {
                        "total_time": 2.55,
                        "articulation_rate": 4.08497,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 2.448
                    }
                },
                {
                    "id": 46,
                    "act": "Ach why not",
                    "start_time": 297.94,
                    "end_time": 298.97,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 362010696.12475,
                        "speech_rate": 2.43506,
                        "articulation_rate": 3.66211,
                        "phonation_time_ratio": 0.66494,
                        "mean_length_of_runs": 0.2,
                        "silent_pauses_rate": 0.48701,
                        "MPD": 0.1376
                    },
                    "phonetics_features": {
                        "total_time": 6.16,
                        "articulation_rate": 3.66211,
                        "silent_pauses": 3,
                        "total_syllables": 15,
                        "phonation_time": 4.096
                    }
                },
                {
                    "id": 47,
                    "act": "We might have to get you up again then.",
                    "start_time": 298.97,
                    "end_time": 300.43,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1.9342813113834067e+29,
                        "speech_rate": 2.91667,
                        "articulation_rate": 2.91667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.4,
                        "articulation_rate": 2.91667,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 2.4
                    }
                },
                {
                    "id": 48,
                    "act": "I don't know what mine is.",
                    "start_time": 301.14,
                    "end_time": 302.11,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2590105601.455,
                        "speech_rate": 4.54545,
                        "articulation_rate": 4.54545,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.22,
                        "articulation_rate": 4.54545,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.22
                    }
                },
                {
                    "id": 49,
                    "act": "I'm gonna have to think on the spot now.",
                    "start_time": 302.11,
                    "end_time": 303.58,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 276828337.69629,
                        "speech_rate": 6.12245,
                        "articulation_rate": 6.5312,
                        "phonation_time_ratio": 0.93741,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01022
                    },
                    "phonetics_features": {
                        "total_time": 1.47,
                        "articulation_rate": 6.5312,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.378
                    }
                },
                {
                    "id": 50,
                    "act": "Is that a whale?",
                    "start_time": 312.05,
                    "end_time": 315.13,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 226752797.30131,
                        "speech_rate": 1.2987,
                        "articulation_rate": 2.35849,
                        "phonation_time_ratio": 0.55065,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.32468,
                        "MPD": 0.346
                    },
                    "phonetics_features": {
                        "total_time": 3.08,
                        "articulation_rate": 2.35849,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 1.696
                    }
                },
                {
                    "id": 51,
                    "act": "Ah.",
                    "start_time": 327.91,
                    "end_time": 328.53,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2611839842.36041,
                        "speech_rate": 1.6129,
                        "articulation_rate": 2.34742,
                        "phonation_time_ratio": 0.6871,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.194
                    },
                    "phonetics_features": {
                        "total_time": 0.62,
                        "articulation_rate": 2.34742,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.426
                    }
                },
                {
                    "id": 54,
                    "act": "Okay.",
                    "start_time": 342.42,
                    "end_time": 343.63,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10135397563.80354,
                        "speech_rate": 1.65289,
                        "articulation_rate": 4.85437,
                        "phonation_time_ratio": 0.3405,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.399
                    },
                    "phonetics_features": {
                        "total_time": 1.21,
                        "articulation_rate": 4.85437,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.412
                    }
                },
                {
                    "id": 53,
                    "act": "God, I still don't know what I'm gonna write about.",
                    "start_time": 343.63,
                    "end_time": 346.39,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 360062623.82826,
                        "speech_rate": 4.34783,
                        "articulation_rate": 6.67408,
                        "phonation_time_ratio": 0.65145,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.36232,
                        "MPD": 0.08017
                    },
                    "phonetics_features": {
                        "total_time": 2.76,
                        "articulation_rate": 6.67408,
                        "silent_pauses": 1,
                        "total_syllables": 12,
                        "phonation_time": 1.798
                    }
                },
                {
                    "id": 52,
                    "act": "Um.",
                    "start_time": 346.39,
                    "end_time": 346.85,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 344075124.6273,
                        "speech_rate": 2.17391,
                        "articulation_rate": 2.26244,
                        "phonation_time_ratio": 0.96087,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.018
                    },
                    "phonetics_features": {
                        "total_time": 0.46,
                        "articulation_rate": 2.26244,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.442
                    }
                },
                {
                    "id": 55,
                    "act": "I was gonna choose a dog as well.",
                    "start_time": 354.91,
                    "end_time": 357.54,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1220805543.84192,
                        "speech_rate": 3.42205,
                        "articulation_rate": 5.02232,
                        "phonation_time_ratio": 0.68137,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.09311
                    },
                    "phonetics_features": {
                        "total_time": 2.63,
                        "articulation_rate": 5.02232,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.792
                    }
                },
                {
                    "id": 56,
                    "act": "But I'll just draw a different kind of dog.",
                    "start_time": 357.54,
                    "end_time": 360.21,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 279728859.03439,
                        "speech_rate": 4.11985,
                        "articulation_rate": 7.80142,
                        "phonation_time_ratio": 0.52809,
                        "mean_length_of_runs": 0.18182,
                        "silent_pauses_rate": 0.74906,
                        "MPD": 0.11455
                    },
                    "phonetics_features": {
                        "total_time": 2.67,
                        "articulation_rate": 7.80142,
                        "silent_pauses": 2,
                        "total_syllables": 11,
                        "phonation_time": 1.41
                    }
                },
                {
                    "id": 57,
                    "act": "M my favourite animal is my own dog at home.",
                    "start_time": 360.21,
                    "end_time": 364.23,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2624280841.64822,
                        "speech_rate": 3.23383,
                        "articulation_rate": 4.03727,
                        "phonation_time_ratio": 0.801,
                        "mean_length_of_runs": 0.07692,
                        "silent_pauses_rate": 0.24876,
                        "MPD": 0.06154
                    },
                    "phonetics_features": {
                        "total_time": 4.02,
                        "articulation_rate": 4.03727,
                        "silent_pauses": 1,
                        "total_syllables": 13,
                        "phonation_time": 3.22
                    }
                },
                {
                    "id": 58,
                    "act": "Um",
                    "start_time": 364.23,
                    "end_time": 364.92,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 178760917.48527,
                        "speech_rate": 1.44928,
                        "articulation_rate": 1.44928,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.69,
                        "articulation_rate": 1.44928,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.69
                    }
                },
                {
                    "id": 59,
                    "act": "That doesn't really look like him, actually.",
                    "start_time": 367.01,
                    "end_time": 368.63,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2620751483.5916,
                        "speech_rate": 6.17284,
                        "articulation_rate": 6.28931,
                        "phonation_time_ratio": 0.98148,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.003
                    },
                    "phonetics_features": {
                        "total_time": 1.62,
                        "articulation_rate": 6.28931,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 1.59
                    }
                },
                {
                    "id": 60,
                    "act": "He looks more like a pig, actually.",
                    "start_time": 373.3,
                    "end_time": 374.72,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2619937618.62776,
                        "speech_rate": 5.6338,
                        "articulation_rate": 5.81395,
                        "phonation_time_ratio": 0.96901,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0055
                    },
                    "phonetics_features": {
                        "total_time": 1.42,
                        "articulation_rate": 5.81395,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.376
                    }
                },
                {
                    "id": 61,
                    "act": "Ah well.",
                    "start_time": 375.84,
                    "end_time": 376.27,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1203777365.49706,
                        "speech_rate": 4.65116,
                        "articulation_rate": 5.43478,
                        "phonation_time_ratio": 0.85581,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.031
                    },
                    "phonetics_features": {
                        "total_time": 0.43,
                        "articulation_rate": 5.43478,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.368
                    }
                },
                {
                    "id": 62,
                    "act": "Do you?",
                    "start_time": 379.52,
                    "end_time": 380.06,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 710626682.80717,
                        "speech_rate": 3.7037,
                        "articulation_rate": 3.81679,
                        "phonation_time_ratio": 0.97037,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.008
                    },
                    "phonetics_features": {
                        "total_time": 0.54,
                        "articulation_rate": 3.81679,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.524
                    }
                },
                {
                    "id": 63,
                    "act": "Oh that's very good of you.",
                    "start_time": 380.06,
                    "end_time": 380.97,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10132922631.86859,
                        "speech_rate": 7.69231,
                        "articulation_rate": 7.69231,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.91,
                        "articulation_rate": 7.69231,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 0.91
                    }
                },
                {
                    "id": 64,
                    "act": "Uh.",
                    "start_time": 388.27,
                    "end_time": 389.07,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 3.438722331348278e+31,
                        "speech_rate": 1.25,
                        "articulation_rate": 1.3587,
                        "phonation_time_ratio": 0.92,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.064
                    },
                    "phonetics_features": {
                        "total_time": 0.8,
                        "articulation_rate": 1.3587,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.736
                    }
                },
                {
                    "id": 66,
                    "act": "Um he's a mixture of uh various things.",
                    "start_time": 394.87,
                    "end_time": 398.71,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 724965106.46867,
                        "speech_rate": 2.60417,
                        "articulation_rate": 3.17864,
                        "phonation_time_ratio": 0.81927,
                        "mean_length_of_runs": 0.1,
                        "silent_pauses_rate": 0.26042,
                        "MPD": 0.0694
                    },
                    "phonetics_features": {
                        "total_time": 3.84,
                        "articulation_rate": 3.17864,
                        "silent_pauses": 1,
                        "total_syllables": 10,
                        "phonation_time": 3.146
                    }
                },
                {
                    "id": 67,
                    "act": "Um and what do I like about him, um",
                    "start_time": 398.71,
                    "end_time": 403.23,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2624549624.01351,
                        "speech_rate": 2.21239,
                        "articulation_rate": 3.27225,
                        "phonation_time_ratio": 0.67611,
                        "mean_length_of_runs": 0.1,
                        "silent_pauses_rate": 0.22124,
                        "MPD": 0.1464
                    },
                    "phonetics_features": {
                        "total_time": 4.52,
                        "articulation_rate": 3.27225,
                        "silent_pauses": 1,
                        "total_syllables": 10,
                        "phonation_time": 3.056
                    }
                },
                {
                    "id": 68,
                    "act": "That's just to suggest that his tail wags.",
                    "start_time": 403.23,
                    "end_time": 405.71,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 225995358.95397,
                        "speech_rate": 3.62903,
                        "articulation_rate": 4.64876,
                        "phonation_time_ratio": 0.78065,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.06044
                    },
                    "phonetics_features": {
                        "total_time": 2.48,
                        "articulation_rate": 4.64876,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.936
                    }
                },
                {
                    "id": 70,
                    "act": "Um he's very friendly and cheery and always pleased to see you,",
                    "start_time": 405.71,
                    "end_time": 409.2,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 189429324.86333,
                        "speech_rate": 4.58453,
                        "articulation_rate": 5.07614,
                        "phonation_time_ratio": 0.90315,
                        "mean_length_of_runs": 0.0625,
                        "silent_pauses_rate": 0.28653,
                        "MPD": 0.02113
                    },
                    "phonetics_features": {
                        "total_time": 3.49,
                        "articulation_rate": 5.07614,
                        "silent_pauses": 1,
                        "total_syllables": 16,
                        "phonation_time": 3.152
                    }
                },
                {
                    "id": 71,
                    "act": "and very kind of affectionate",
                    "start_time": 409.2,
                    "end_time": 411.11,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10138228979.93381,
                        "speech_rate": 4.71204,
                        "articulation_rate": 5.89777,
                        "phonation_time_ratio": 0.79895,
                        "mean_length_of_runs": 0.11111,
                        "silent_pauses_rate": 0.52356,
                        "MPD": 0.04267
                    },
                    "phonetics_features": {
                        "total_time": 1.91,
                        "articulation_rate": 5.89777,
                        "silent_pauses": 1,
                        "total_syllables": 9,
                        "phonation_time": 1.526
                    }
                },
                {
                    "id": 69,
                    "act": "and um",
                    "start_time": 411.11,
                    "end_time": 413.77,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 359931348.88644,
                        "speech_rate": 0.75188,
                        "articulation_rate": 1.63132,
                        "phonation_time_ratio": 0.4609,
                        "mean_length_of_runs": 0.5,
                        "silent_pauses_rate": 0.37594,
                        "MPD": 0.717
                    },
                    "phonetics_features": {
                        "total_time": 2.66,
                        "articulation_rate": 1.63132,
                        "silent_pauses": 1,
                        "total_syllables": 2,
                        "phonation_time": 1.226
                    }
                },
                {
                    "id": 72,
                    "act": "uh",
                    "start_time": 415.0,
                    "end_time": 415.12,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2569444444.38889,
                        "speech_rate": 8.33333,
                        "articulation_rate": 20.83333,
                        "phonation_time_ratio": 0.4,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.072
                    },
                    "phonetics_features": {
                        "total_time": 0.12,
                        "articulation_rate": 20.83333,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.048
                    }
                },
                {
                    "id": 73,
                    "act": "and he's quite quite wee as well so you know he can doesn't take up too much space.",
                    "start_time": 415.12,
                    "end_time": 421.48,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 362825340.89685,
                        "speech_rate": 2.51572,
                        "articulation_rate": 2.96296,
                        "phonation_time_ratio": 0.84906,
                        "mean_length_of_runs": 0.125,
                        "silent_pauses_rate": 0.31447,
                        "MPD": 0.06
                    },
                    "phonetics_features": {
                        "total_time": 6.36,
                        "articulation_rate": 2.96296,
                        "silent_pauses": 2,
                        "total_syllables": 16,
                        "phonation_time": 5.4
                    }
                },
                {
                    "id": 74,
                    "act": "Um",
                    "start_time": 421.48,
                    "end_time": 422.22,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 714894239.52832,
                        "speech_rate": 1.35135,
                        "articulation_rate": 1.37363,
                        "phonation_time_ratio": 0.98378,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.012
                    },
                    "phonetics_features": {
                        "total_time": 0.74,
                        "articulation_rate": 1.37363,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.728
                    }
                },
                {
                    "id": 75,
                    "act": "and uh And he does a funny thing where he chases his tail as well,",
                    "start_time": 425.56,
                    "end_time": 430.28,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2624641361.23947,
                        "speech_rate": 3.17797,
                        "articulation_rate": 4.77099,
                        "phonation_time_ratio": 0.6661,
                        "mean_length_of_runs": 0.13333,
                        "silent_pauses_rate": 0.42373,
                        "MPD": 0.10507
                    },
                    "phonetics_features": {
                        "total_time": 4.72,
                        "articulation_rate": 4.77099,
                        "silent_pauses": 2,
                        "total_syllables": 15,
                        "phonation_time": 3.144
                    }
                },
                {
                    "id": 76,
                    "act": "which is quite amusing, so",
                    "start_time": 430.28,
                    "end_time": 431.6,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2619441685.28418,
                        "speech_rate": 5.30303,
                        "articulation_rate": 5.30303,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.32,
                        "articulation_rate": 5.30303,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.32
                    }
                },
                {
                    "id": 77,
                    "act": "It is. I think it is.",
                    "start_time": 433.83,
                    "end_time": 434.67,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 716311473.08727,
                        "speech_rate": 7.14286,
                        "articulation_rate": 7.14286,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.84,
                        "articulation_rate": 7.14286,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 0.84
                    }
                },
                {
                    "id": 78,
                    "act": "He only does it after he's had his dinner",
                    "start_time": 434.67,
                    "end_time": 436.84,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 278901172.32216,
                        "speech_rate": 5.06912,
                        "articulation_rate": 6.53983,
                        "phonation_time_ratio": 0.77512,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.04436
                    },
                    "phonetics_features": {
                        "total_time": 2.17,
                        "articulation_rate": 6.53983,
                        "silent_pauses": 0,
                        "total_syllables": 11,
                        "phonation_time": 1.682
                    }
                },
                {
                    "id": 79,
                    "act": "and um he'll just all of a sudden just get up and start chasing his tail 'round the living room.",
                    "start_time": 436.84,
                    "end_time": 441.92,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 227998157.79047,
                        "speech_rate": 4.33071,
                        "articulation_rate": 5.35019,
                        "phonation_time_ratio": 0.80945,
                        "mean_length_of_runs": 0.04545,
                        "silent_pauses_rate": 0.19685,
                        "MPD": 0.044
                    },
                    "phonetics_features": {
                        "total_time": 5.08,
                        "articulation_rate": 5.35019,
                        "silent_pauses": 1,
                        "total_syllables": 22,
                        "phonation_time": 4.112
                    }
                },
                {
                    "id": 80,
                    "act": "Yeah,",
                    "start_time": 443.59,
                    "end_time": 444.02,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1203777365.49706,
                        "speech_rate": 2.32558,
                        "articulation_rate": 2.38095,
                        "phonation_time_ratio": 0.97674,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01
                    },
                    "phonetics_features": {
                        "total_time": 0.43,
                        "articulation_rate": 2.38095,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.42
                    }
                },
                {
                    "id": 81,
                    "act": "so uh",
                    "start_time": 444.02,
                    "end_time": 445.26,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 719787594.84286,
                        "speech_rate": 1.6129,
                        "articulation_rate": 3.93701,
                        "phonation_time_ratio": 0.40968,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.366
                    },
                    "phonetics_features": {
                        "total_time": 1.24,
                        "articulation_rate": 3.93701,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.508
                    }
                },
                {
                    "id": 82,
                    "act": "Yeah,",
                    "start_time": 447.15,
                    "end_time": 447.47,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2599871226.455,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.4965,
                        "phonation_time_ratio": 0.89375,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.034
                    },
                    "phonetics_features": {
                        "total_time": 0.32,
                        "articulation_rate": 3.4965,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.286
                    }
                },
                {
                    "id": 105,
                    "act": "maybe.",
                    "start_time": 447.47,
                    "end_time": 448.08,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10128207156.96697,
                        "speech_rate": 1.63934,
                        "articulation_rate": 1.6835,
                        "phonation_time_ratio": 0.97377,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.016
                    },
                    "phonetics_features": {
                        "total_time": 0.61,
                        "articulation_rate": 1.6835,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.594
                    }
                },
                {
                    "id": 83,
                    "act": "Maybe.",
                    "start_time": 449.0,
                    "end_time": 450.7,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 158780674.087,
                        "speech_rate": 0.58824,
                        "articulation_rate": 0.90909,
                        "phonation_time_ratio": 0.64706,
                        "mean_length_of_runs": 1.0,
                        "silent_pauses_rate": 0.58824,
                        "MPD": 0.6
                    },
                    "phonetics_features": {
                        "total_time": 1.7,
                        "articulation_rate": 0.90909,
                        "silent_pauses": 1,
                        "total_syllables": 1,
                        "phonation_time": 1.1
                    }
                },
                {
                    "id": 84,
                    "act": "Right, um where did you find this?",
                    "start_time": 450.7,
                    "end_time": 452.3,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 8.596805828370695e+30,
                        "speech_rate": 4.375,
                        "articulation_rate": 4.375,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.6,
                        "articulation_rate": 4.375,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.6
                    }
                },
                {
                    "id": 85,
                    "act": "Just down here? Yeah.",
                    "start_time": 452.3,
                    "end_time": 453.61,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10135980280.43054,
                        "speech_rate": 3.05344,
                        "articulation_rate": 4.914,
                        "phonation_time_ratio": 0.62137,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.76336,
                        "MPD": 0.124
                    },
                    "phonetics_features": {
                        "total_time": 1.31,
                        "articulation_rate": 4.914,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 0.814
                    }
                },
                {
                    "id": 86,
                    "act": "Okay.",
                    "start_time": 455.51,
                    "end_time": 456.76,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 485791697.65403,
                        "speech_rate": 1.6,
                        "articulation_rate": 1.98413,
                        "phonation_time_ratio": 0.8064,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.121
                    },
                    "phonetics_features": {
                        "total_time": 1.25,
                        "articulation_rate": 1.98413,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 1.008
                    }
                },
                {
                    "id": 87,
                    "act": "Um what are we doing next? Uh um.",
                    "start_time": 458.92,
                    "end_time": 462.97,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 491041316.59532,
                        "speech_rate": 1.7284,
                        "articulation_rate": 3.21396,
                        "phonation_time_ratio": 0.53778,
                        "mean_length_of_runs": 0.42857,
                        "silent_pauses_rate": 0.74074,
                        "MPD": 0.26743
                    },
                    "phonetics_features": {
                        "total_time": 4.05,
                        "articulation_rate": 3.21396,
                        "silent_pauses": 3,
                        "total_syllables": 7,
                        "phonation_time": 2.178
                    }
                },
                {
                    "id": 88,
                    "act": "Okay, uh we now need to discuss the project finance.",
                    "start_time": 465.51,
                    "end_time": 470.01,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 162295692.93626,
                        "speech_rate": 2.66667,
                        "articulation_rate": 4.19874,
                        "phonation_time_ratio": 0.63511,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.22222,
                        "MPD": 0.13683
                    },
                    "phonetics_features": {
                        "total_time": 4.5,
                        "articulation_rate": 4.19874,
                        "silent_pauses": 1,
                        "total_syllables": 12,
                        "phonation_time": 2.858
                    }
                },
                {
                    "id": 89,
                    "act": "Um so according to the brief um we're gonna be selling this remote control for twenty five Euro,",
                    "start_time": 470.01,
                    "end_time": 476.53,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2625511688.20435,
                        "speech_rate": 3.68098,
                        "articulation_rate": 5.00835,
                        "phonation_time_ratio": 0.73497,
                        "mean_length_of_runs": 0.04167,
                        "silent_pauses_rate": 0.15337,
                        "MPD": 0.072
                    },
                    "phonetics_features": {
                        "total_time": 6.52,
                        "articulation_rate": 5.00835,
                        "silent_pauses": 1,
                        "total_syllables": 24,
                        "phonation_time": 4.792
                    }
                },
                {
                    "id": 90,
                    "act": "um and we're aiming to make fifty million Euro.",
                    "start_time": 476.53,
                    "end_time": 482.77,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 725945867.38785,
                        "speech_rate": 2.08333,
                        "articulation_rate": 3.94417,
                        "phonation_time_ratio": 0.52821,
                        "mean_length_of_runs": 0.30769,
                        "silent_pauses_rate": 0.64103,
                        "MPD": 0.22646
                    },
                    "phonetics_features": {
                        "total_time": 6.24,
                        "articulation_rate": 3.94417,
                        "silent_pauses": 4,
                        "total_syllables": 13,
                        "phonation_time": 3.296
                    }
                },
                {
                    "id": 91,
                    "act": "Um so we're gonna be selling this on an international scale.",
                    "start_time": 482.77,
                    "end_time": 487.21,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 725308579.57694,
                        "speech_rate": 3.6036,
                        "articulation_rate": 4.18629,
                        "phonation_time_ratio": 0.86081,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.03863
                    },
                    "phonetics_features": {
                        "total_time": 4.44,
                        "articulation_rate": 4.18629,
                        "silent_pauses": 0,
                        "total_syllables": 16,
                        "phonation_time": 3.822
                    }
                },
                {
                    "id": 92,
                    "act": "And uh we don't want it to cost any more than uh twelve fifty Euros, so fifty percent of the selling price.",
                    "start_time": 487.21,
                    "end_time": 495.0,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 191883787.28067,
                        "speech_rate": 3.33761,
                        "articulation_rate": 3.75289,
                        "phonation_time_ratio": 0.88935,
                        "mean_length_of_runs": 0.03846,
                        "silent_pauses_rate": 0.12837,
                        "MPD": 0.03315
                    },
                    "phonetics_features": {
                        "total_time": 7.79,
                        "articulation_rate": 3.75289,
                        "silent_pauses": 1,
                        "total_syllables": 26,
                        "phonation_time": 6.928
                    }
                },
                {
                    "id": 93,
                    "act": "Sure.",
                    "start_time": 497.99,
                    "end_time": 498.46,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 264232667.11403,
                        "speech_rate": 2.12766,
                        "articulation_rate": 2.60417,
                        "phonation_time_ratio": 0.81702,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.086
                    },
                    "phonetics_features": {
                        "total_time": 0.47,
                        "articulation_rate": 2.60417,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.384
                    }
                },
                {
                    "id": 94,
                    "act": "All together.",
                    "start_time": 508.17,
                    "end_time": 508.92,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 480996408.21593,
                        "speech_rate": 5.33333,
                        "articulation_rate": 5.33333,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.75,
                        "articulation_rate": 5.33333,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 0.75
                    }
                },
                {
                    "id": 95,
                    "act": "Um I dunno.",
                    "start_time": 515.16,
                    "end_time": 516.78,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2620751483.5916,
                        "speech_rate": 2.46914,
                        "articulation_rate": 4.87805,
                        "phonation_time_ratio": 0.50617,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.61728,
                        "MPD": 0.2
                    },
                    "phonetics_features": {
                        "total_time": 1.62,
                        "articulation_rate": 4.87805,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 0.82
                    }
                },
                {
                    "id": 99,
                    "act": "I imagine",
                    "start_time": 516.78,
                    "end_time": 517.97,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 184193840.5159,
                        "speech_rate": 3.36134,
                        "articulation_rate": 6.06061,
                        "phonation_time_ratio": 0.55462,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.1325
                    },
                    "phonetics_features": {
                        "total_time": 1.19,
                        "articulation_rate": 6.06061,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 0.66
                    }
                },
                {
                    "id": 96,
                    "act": "That's a good question.",
                    "start_time": 517.97,
                    "end_time": 518.91,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 717443206.90936,
                        "speech_rate": 5.31915,
                        "articulation_rate": 6.00962,
                        "phonation_time_ratio": 0.88511,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0216
                    },
                    "phonetics_features": {
                        "total_time": 0.94,
                        "articulation_rate": 6.00962,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 0.832
                    }
                },
                {
                    "id": 97,
                    "act": "I imagine it probably is our sale actually",
                    "start_time": 519.67,
                    "end_time": 521.58,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10138228979.93381,
                        "speech_rate": 7.32984,
                        "articulation_rate": 7.32984,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.91,
                        "articulation_rate": 7.32984,
                        "silent_pauses": 0,
                        "total_syllables": 14,
                        "phonation_time": 1.91
                    }
                },
                {
                    "id": 98,
                    "act": "because it's probably up to the the um the retailer to uh sell it for whatever price they want. Um.",
                    "start_time": 521.58,
                    "end_time": 530.2,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2625584330.77624,
                        "speech_rate": 2.78422,
                        "articulation_rate": 4.24628,
                        "phonation_time_ratio": 0.65568,
                        "mean_length_of_runs": 0.125,
                        "silent_pauses_rate": 0.34803,
                        "MPD": 0.12367
                    },
                    "phonetics_features": {
                        "total_time": 8.62,
                        "articulation_rate": 4.24628,
                        "silent_pauses": 3,
                        "total_syllables": 24,
                        "phonation_time": 5.652
                    }
                },
                {
                    "id": 106,
                    "act": "But I I don't know,",
                    "start_time": 531.83,
                    "end_time": 532.46,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1209856877.58405,
                        "speech_rate": 7.93651,
                        "articulation_rate": 8.27815,
                        "phonation_time_ratio": 0.95873,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0052
                    },
                    "phonetics_features": {
                        "total_time": 0.63,
                        "articulation_rate": 8.27815,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 0.604
                    }
                },
                {
                    "id": 100,
                    "act": "I mean do you think the fact that it's going to be sold internationally will have a bearing on how we design it at all?",
                    "start_time": 532.46,
                    "end_time": 538.19,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1222806393.75305,
                        "speech_rate": 5.06108,
                        "articulation_rate": 5.64202,
                        "phonation_time_ratio": 0.89703,
                        "mean_length_of_runs": 0.03448,
                        "silent_pauses_rate": 0.17452,
                        "MPD": 0.02034
                    },
                    "phonetics_features": {
                        "total_time": 5.73,
                        "articulation_rate": 5.64202,
                        "silent_pauses": 1,
                        "total_syllables": 29,
                        "phonation_time": 5.14
                    }
                },
                {
                    "id": 107,
                    "act": "Think it will?",
                    "start_time": 539.31,
                    "end_time": 541.17,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 358386560.00761,
                        "speech_rate": 1.6129,
                        "articulation_rate": 4.06504,
                        "phonation_time_ratio": 0.39677,
                        "mean_length_of_runs": 0.33333,
                        "silent_pauses_rate": 0.53763,
                        "MPD": 0.374
                    },
                    "phonetics_features": {
                        "total_time": 1.86,
                        "articulation_rate": 4.06504,
                        "silent_pauses": 1,
                        "total_syllables": 3,
                        "phonation_time": 0.738
                    }
                },
                {
                    "id": 102,
                    "act": "Um.",
                    "start_time": 541.17,
                    "end_time": 542.15,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 220246277.13798,
                        "speech_rate": 1.02041,
                        "articulation_rate": 1.96078,
                        "phonation_time_ratio": 0.52041,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.47
                    },
                    "phonetics_features": {
                        "total_time": 0.98,
                        "articulation_rate": 1.96078,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.51
                    }
                },
                {
                    "id": 101,
                    "act": "Hmm.",
                    "start_time": 545.43,
                    "end_time": 546.06,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1209856877.58405,
                        "speech_rate": 1.5873,
                        "articulation_rate": 1.74825,
                        "phonation_time_ratio": 0.90794,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.058
                    },
                    "phonetics_features": {
                        "total_time": 0.63,
                        "articulation_rate": 1.74825,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.572
                    }
                },
                {
                    "id": 108,
                    "act": "Oh yeah,",
                    "start_time": 553.78,
                    "end_time": 554.46,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 216270066.51812,
                        "speech_rate": 2.94118,
                        "articulation_rate": 2.94118,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.68,
                        "articulation_rate": 2.94118,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.68
                    }
                },
                {
                    "id": 109,
                    "act": "regions and stuff, yeah.",
                    "start_time": 554.46,
                    "end_time": 556.62,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 359096851.88736,
                        "speech_rate": 2.31481,
                        "articulation_rate": 3.84615,
                        "phonation_time_ratio": 0.60185,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.172
                    },
                    "phonetics_features": {
                        "total_time": 2.16,
                        "articulation_rate": 3.84615,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.3
                    }
                },
                {
                    "id": 110,
                    "act": "Yeah.",
                    "start_time": 556.62,
                    "end_time": 557.56,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 717443206.90936,
                        "speech_rate": 1.06383,
                        "articulation_rate": 2.5,
                        "phonation_time_ratio": 0.42553,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.54
                    },
                    "phonetics_features": {
                        "total_time": 0.94,
                        "articulation_rate": 2.5,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.4
                    }
                },
                {
                    "id": 111,
                    "act": "Okay.",
                    "start_time": 557.56,
                    "end_time": 558.06,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 146361111.08889,
                        "speech_rate": 4.0,
                        "articulation_rate": 6.57895,
                        "phonation_time_ratio": 0.608,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.098
                    },
                    "phonetics_features": {
                        "total_time": 0.5,
                        "articulation_rate": 6.57895,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.304
                    }
                },
                {
                    "id": 112,
                    "act": "Yeah.",
                    "start_time": 565.13,
                    "end_time": 565.93,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 152742205.20839,
                        "speech_rate": 1.25,
                        "articulation_rate": 2.01613,
                        "phonation_time_ratio": 0.62,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.304
                    },
                    "phonetics_features": {
                        "total_time": 0.8,
                        "articulation_rate": 2.01613,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.496
                    }
                },
                {
                    "id": 113,
                    "act": "Well for a remote control, do you think that will be",
                    "start_time": 565.93,
                    "end_time": 568.3,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 279273271.94442,
                        "speech_rate": 5.06329,
                        "articulation_rate": 6.14754,
                        "phonation_time_ratio": 0.82363,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.03483
                    },
                    "phonetics_features": {
                        "total_time": 2.37,
                        "articulation_rate": 6.14754,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 1.952
                    }
                },
                {
                    "id": 114,
                    "act": "I suppose it's depends on how complicated our remote control is.",
                    "start_time": 568.3,
                    "end_time": 571.01,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10139707124.77506,
                        "speech_rate": 6.64207,
                        "articulation_rate": 6.98758,
                        "phonation_time_ratio": 0.95055,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.00744
                    },
                    "phonetics_features": {
                        "total_time": 2.71,
                        "articulation_rate": 6.98758,
                        "silent_pauses": 0,
                        "total_syllables": 18,
                        "phonation_time": 2.576
                    }
                },
                {
                    "id": 115,
                    "act": "Yeah, yeah.",
                    "start_time": 580.42,
                    "end_time": 583.04,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2622992839.77269,
                        "speech_rate": 0.76336,
                        "articulation_rate": 1.95312,
                        "phonation_time_ratio": 0.39084,
                        "mean_length_of_runs": 1.0,
                        "silent_pauses_rate": 0.76336,
                        "MPD": 0.798
                    },
                    "phonetics_features": {
                        "total_time": 2.62,
                        "articulation_rate": 1.95312,
                        "silent_pauses": 2,
                        "total_syllables": 2,
                        "phonation_time": 1.024
                    }
                },
                {
                    "id": 117,
                    "act": "Okay.",
                    "start_time": 583.04,
                    "end_time": 583.9,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 352642968.42274,
                        "speech_rate": 2.32558,
                        "articulation_rate": 7.35294,
                        "phonation_time_ratio": 0.31628,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.294
                    },
                    "phonetics_features": {
                        "total_time": 0.86,
                        "articulation_rate": 7.35294,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.272
                    }
                },
                {
                    "id": 118,
                    "act": "What, just like in terms of like the wealth of the country?",
                    "start_time": 597.79,
                    "end_time": 600.43,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 723818614.80639,
                        "speech_rate": 4.16667,
                        "articulation_rate": 4.16667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.64,
                        "articulation_rate": 4.16667,
                        "silent_pauses": 0,
                        "total_syllables": 11,
                        "phonation_time": 2.64
                    }
                },
                {
                    "id": 119,
                    "act": "Like how much money people have to spend on things like?",
                    "start_time": 600.43,
                    "end_time": 603.43,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 161215011.74893,
                        "speech_rate": 4.0,
                        "articulation_rate": 5.20382,
                        "phonation_time_ratio": 0.76867,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.33333,
                        "MPD": 0.05783
                    },
                    "phonetics_features": {
                        "total_time": 3.0,
                        "articulation_rate": 5.20382,
                        "silent_pauses": 1,
                        "total_syllables": 12,
                        "phonation_time": 2.306
                    }
                },
                {
                    "id": 120,
                    "act": "Aye, I see what you mean, yeah.",
                    "start_time": 615.74,
                    "end_time": 617.28,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 721248421.10266,
                        "speech_rate": 3.24675,
                        "articulation_rate": 3.24675,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.54,
                        "articulation_rate": 3.24675,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.54
                    }
                },
                {
                    "id": 121,
                    "act": "Marketing.",
                    "start_time": 619.01,
                    "end_time": 620.06,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 484395553.9822,
                        "speech_rate": 2.85714,
                        "articulation_rate": 5.51471,
                        "phonation_time_ratio": 0.5181,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.16867
                    },
                    "phonetics_features": {
                        "total_time": 1.05,
                        "articulation_rate": 5.51471,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.544
                    }
                },
                {
                    "id": 122,
                    "act": "Good marketing thoughts.",
                    "start_time": 620.06,
                    "end_time": 621.09,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1215283790.69905,
                        "speech_rate": 4.85437,
                        "articulation_rate": 5.03018,
                        "phonation_time_ratio": 0.96505,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0072
                    },
                    "phonetics_features": {
                        "total_time": 1.03,
                        "articulation_rate": 5.03018,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 0.994
                    }
                },
                {
                    "id": 123,
                    "act": "Oh gosh,",
                    "start_time": 621.09,
                    "end_time": 621.49,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 142361111.08889,
                        "speech_rate": 5.0,
                        "articulation_rate": 5.0,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.4,
                        "articulation_rate": 5.0,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.4
                    }
                },
                {
                    "id": 124,
                    "act": "I should be writing all this down. Um.",
                    "start_time": 621.49,
                    "end_time": 624.87,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 227032168.37102,
                        "speech_rate": 2.36686,
                        "articulation_rate": 3.65297,
                        "phonation_time_ratio": 0.64793,
                        "mean_length_of_runs": 0.125,
                        "silent_pauses_rate": 0.29586,
                        "MPD": 0.14875
                    },
                    "phonetics_features": {
                        "total_time": 3.38,
                        "articulation_rate": 3.65297,
                        "silent_pauses": 1,
                        "total_syllables": 8,
                        "phonation_time": 2.19
                    }
                },
                {
                    "id": 125,
                    "act": "Mm.",
                    "start_time": 660.7,
                    "end_time": 661.22,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2609238385.53107,
                        "speech_rate": 1.92308,
                        "articulation_rate": 2.0,
                        "phonation_time_ratio": 0.96154,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.02
                    },
                    "phonetics_features": {
                        "total_time": 0.52,
                        "articulation_rate": 2.0,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.5
                    }
                },
                {
                    "id": 126,
                    "act": "Yeah.",
                    "start_time": 665.36,
                    "end_time": 665.84,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 211134785.14483,
                        "speech_rate": 2.08333,
                        "articulation_rate": 2.15517,
                        "phonation_time_ratio": 0.96667,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.016
                    },
                    "phonetics_features": {
                        "total_time": 0.48,
                        "articulation_rate": 2.15517,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.464
                    }
                },
                {
                    "id": 127,
                    "act": "Yeah, yeah.",
                    "start_time": 677.15,
                    "end_time": 677.66,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10125519707.36417,
                        "speech_rate": 3.92157,
                        "articulation_rate": 4.06504,
                        "phonation_time_ratio": 0.96471,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.009
                    },
                    "phonetics_features": {
                        "total_time": 0.51,
                        "articulation_rate": 4.06504,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.492
                    }
                },
                {
                    "id": 128,
                    "act": "Like how much does, you know, a remote control cost.",
                    "start_time": 677.66,
                    "end_time": 680.53,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 279980592.7542,
                        "speech_rate": 4.18118,
                        "articulation_rate": 4.4843,
                        "phonation_time_ratio": 0.9324,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01617
                    },
                    "phonetics_features": {
                        "total_time": 2.87,
                        "articulation_rate": 4.4843,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 2.676
                    }
                },
                {
                    "id": 129,
                    "act": "Well twenty five Euro, I mean that's um that's about like eighteen pounds or something,",
                    "start_time": 681.66,
                    "end_time": 687.09,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1222711687.52215,
                        "speech_rate": 3.8674,
                        "articulation_rate": 5.53506,
                        "phonation_time_ratio": 0.69871,
                        "mean_length_of_runs": 0.09524,
                        "silent_pauses_rate": 0.36832,
                        "MPD": 0.0779
                    },
                    "phonetics_features": {
                        "total_time": 5.43,
                        "articulation_rate": 5.53506,
                        "silent_pauses": 2,
                        "total_syllables": 21,
                        "phonation_time": 3.794
                    }
                },
                {
                    "id": 130,
                    "act": "isn't it?",
                    "start_time": 687.09,
                    "end_time": 687.81,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2613768854.70918,
                        "speech_rate": 2.77778,
                        "articulation_rate": 5.71429,
                        "phonation_time_ratio": 0.48611,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.185
                    },
                    "phonetics_features": {
                        "total_time": 0.72,
                        "articulation_rate": 5.71429,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.35
                    }
                },
                {
                    "id": 131,
                    "act": "Or no,",
                    "start_time": 687.81,
                    "end_time": 688.04,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1189186300.19541,
                        "speech_rate": 8.69565,
                        "articulation_rate": 10.86957,
                        "phonation_time_ratio": 0.8,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.023
                    },
                    "phonetics_features": {
                        "total_time": 0.23,
                        "articulation_rate": 10.86957,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.184
                    }
                },
                {
                    "id": 132,
                    "act": "is it as much as that?",
                    "start_time": 688.04,
                    "end_time": 689.7,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 357774678.66821,
                        "speech_rate": 3.61446,
                        "articulation_rate": 5.90551,
                        "phonation_time_ratio": 0.61205,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.10733
                    },
                    "phonetics_features": {
                        "total_time": 1.66,
                        "articulation_rate": 5.90551,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.016
                    }
                },
                {
                    "id": 133,
                    "act": "Sixteen seventeen eighteen pounds.",
                    "start_time": 689.7,
                    "end_time": 691.58,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 224767224.74018,
                        "speech_rate": 4.25532,
                        "articulation_rate": 5.68182,
                        "phonation_time_ratio": 0.74894,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.059
                    },
                    "phonetics_features": {
                        "total_time": 1.88,
                        "articulation_rate": 5.68182,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.408
                    }
                },
                {
                    "id": 135,
                    "act": "Um, I dunno,",
                    "start_time": 692.42,
                    "end_time": 694.16,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 721950518.22272,
                        "speech_rate": 2.29885,
                        "articulation_rate": 3.52113,
                        "phonation_time_ratio": 0.65287,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.57471,
                        "MPD": 0.151
                    },
                    "phonetics_features": {
                        "total_time": 1.74,
                        "articulation_rate": 3.52113,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 1.136
                    }
                },
                {
                    "id": 136,
                    "act": "I've never bought a remote control,",
                    "start_time": 694.16,
                    "end_time": 695.53,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 276365567.55265,
                        "speech_rate": 6.56934,
                        "articulation_rate": 6.56934,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.37,
                        "articulation_rate": 6.56934,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.37
                    }
                },
                {
                    "id": 137,
                    "act": "so I don't know how how good a remote control that would get you. Um.",
                    "start_time": 695.53,
                    "end_time": 700.41,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 227919085.78528,
                        "speech_rate": 3.48361,
                        "articulation_rate": 4.63215,
                        "phonation_time_ratio": 0.75205,
                        "mean_length_of_runs": 0.11765,
                        "silent_pauses_rate": 0.40984,
                        "MPD": 0.07118
                    },
                    "phonetics_features": {
                        "total_time": 4.88,
                        "articulation_rate": 4.63215,
                        "silent_pauses": 2,
                        "total_syllables": 17,
                        "phonation_time": 3.67
                    }
                },
                {
                    "id": 138,
                    "act": "But yeah, I suppose it has to look kind of cool and gimmicky.",
                    "start_time": 702.02,
                    "end_time": 705.01,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 188964818.64498,
                        "speech_rate": 5.35117,
                        "articulation_rate": 6.28931,
                        "phonation_time_ratio": 0.85084,
                        "mean_length_of_runs": 0.0625,
                        "silent_pauses_rate": 0.33445,
                        "MPD": 0.02788
                    },
                    "phonetics_features": {
                        "total_time": 2.99,
                        "articulation_rate": 6.28931,
                        "silent_pauses": 1,
                        "total_syllables": 16,
                        "phonation_time": 2.544
                    }
                },
                {
                    "id": 139,
                    "act": "Um right, okay.",
                    "start_time": 707.1,
                    "end_time": 710.07,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 280093959.87316,
                        "speech_rate": 1.3468,
                        "articulation_rate": 2.75862,
                        "phonation_time_ratio": 0.48822,
                        "mean_length_of_runs": 0.5,
                        "silent_pauses_rate": 0.6734,
                        "MPD": 0.38
                    },
                    "phonetics_features": {
                        "total_time": 2.97,
                        "articulation_rate": 2.75862,
                        "silent_pauses": 2,
                        "total_syllables": 4,
                        "phonation_time": 1.45
                    }
                },
                {
                    "id": 140,
                    "act": "Let me just scoot on ahead here.",
                    "start_time": 711.43,
                    "end_time": 713.81,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 225832767.90012,
                        "speech_rate": 2.94118,
                        "articulation_rate": 5.20059,
                        "phonation_time_ratio": 0.56555,
                        "mean_length_of_runs": 0.14286,
                        "silent_pauses_rate": 0.42017,
                        "MPD": 0.14771
                    },
                    "phonetics_features": {
                        "total_time": 2.38,
                        "articulation_rate": 5.20059,
                        "silent_pauses": 1,
                        "total_syllables": 7,
                        "phonation_time": 1.346
                    }
                },
                {
                    "id": 141,
                    "act": "Okay.",
                    "start_time": 713.81,
                    "end_time": 714.96,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 485151697.65403,
                        "speech_rate": 1.73913,
                        "articulation_rate": 4.329,
                        "phonation_time_ratio": 0.40174,
                        "mean_length_of_runs": 0.5,
                        "silent_pauses_rate": 0.86957,
                        "MPD": 0.344
                    },
                    "phonetics_features": {
                        "total_time": 1.15,
                        "articulation_rate": 4.329,
                        "silent_pauses": 1,
                        "total_syllables": 2,
                        "phonation_time": 0.462
                    }
                },
                {
                    "id": 142,
                    "act": "Um well d Does anybody have anything to add to uh to the finance issue at all?",
                    "start_time": 714.96,
                    "end_time": 721.44,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 273625102.55145,
                        "speech_rate": 3.24074,
                        "articulation_rate": 4.14038,
                        "phonation_time_ratio": 0.78272,
                        "mean_length_of_runs": 0.09524,
                        "silent_pauses_rate": 0.30864,
                        "MPD": 0.06705
                    },
                    "phonetics_features": {
                        "total_time": 6.48,
                        "articulation_rate": 4.14038,
                        "silent_pauses": 2,
                        "total_syllables": 21,
                        "phonation_time": 5.072
                    }
                },
                {
                    "id": 143,
                    "act": "Thin",
                    "start_time": 722.81,
                    "end_time": 723.0,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 151157621.07383,
                        "speech_rate": 5.26316,
                        "articulation_rate": 8.92857,
                        "phonation_time_ratio": 0.58947,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.078
                    },
                    "phonetics_features": {
                        "total_time": 0.19,
                        "articulation_rate": 8.92857,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.112
                    }
                },
                {
                    "id": 145,
                    "act": "No, actually.",
                    "start_time": 727.65,
                    "end_time": 728.32,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 269538204.83242,
                        "speech_rate": 5.97015,
                        "articulation_rate": 5.97015,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.67,
                        "articulation_rate": 5.97015,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 0.67
                    }
                },
                {
                    "id": 146,
                    "act": "That would be useful, though,",
                    "start_time": 728.32,
                    "end_time": 729.45,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1216066937.37851,
                        "speech_rate": 5.30973,
                        "articulation_rate": 5.30973,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.13,
                        "articulation_rate": 5.30973,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.13
                    }
                },
                {
                    "id": 147,
                    "act": "wouldn't it,",
                    "start_time": 729.45,
                    "end_time": 729.81,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 339349226.72182,
                        "speech_rate": 5.55556,
                        "articulation_rate": 5.55556,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.36,
                        "articulation_rate": 5.55556,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.36
                    }
                },
                {
                    "id": 148,
                    "act": "if you knew like what your money would get you now.",
                    "start_time": 729.81,
                    "end_time": 732.87,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 360405810.13576,
                        "speech_rate": 3.92157,
                        "articulation_rate": 5.84795,
                        "phonation_time_ratio": 0.67059,
                        "mean_length_of_runs": 0.16667,
                        "silent_pauses_rate": 0.65359,
                        "MPD": 0.084
                    },
                    "phonetics_features": {
                        "total_time": 3.06,
                        "articulation_rate": 5.84795,
                        "silent_pauses": 2,
                        "total_syllables": 12,
                        "phonation_time": 2.052
                    }
                },
                {
                    "id": 144,
                    "act": "Mm-hmm.",
                    "start_time": 735.11,
                    "end_time": 735.7,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 176660518.41617,
                        "speech_rate": 1.69492,
                        "articulation_rate": 2.5,
                        "phonation_time_ratio": 0.67797,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.19
                    },
                    "phonetics_features": {
                        "total_time": 0.59,
                        "articulation_rate": 2.5,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.4
                    }
                },
                {
                    "id": 149,
                    "act": "Yeah, yeah.",
                    "start_time": 767.69,
                    "end_time": 768.25,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 347263900.15281,
                        "speech_rate": 3.57143,
                        "articulation_rate": 4.03226,
                        "phonation_time_ratio": 0.88571,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.032
                    },
                    "phonetics_features": {
                        "total_time": 0.56,
                        "articulation_rate": 4.03226,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.496
                    }
                },
                {
                    "id": 150,
                    "act": "Oh.",
                    "start_time": 772.01,
                    "end_time": 772.14,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1170282708.48652,
                        "speech_rate": 7.69231,
                        "articulation_rate": 7.69231,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.13,
                        "articulation_rate": 7.69231,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.13
                    }
                },
                {
                    "id": 152,
                    "act": "Five minutes to end of meeting.",
                    "start_time": 772.8,
                    "end_time": 774.17,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 276365567.55265,
                        "speech_rate": 6.56934,
                        "articulation_rate": 6.64697,
                        "phonation_time_ratio": 0.98832,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.00178
                    },
                    "phonetics_features": {
                        "total_time": 1.37,
                        "articulation_rate": 6.64697,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.354
                    }
                },
                {
                    "id": 153,
                    "act": "Oh, okay.",
                    "start_time": 774.17,
                    "end_time": 775.33,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 355361197.22994,
                        "speech_rate": 2.58621,
                        "articulation_rate": 3.64964,
                        "phonation_time_ratio": 0.70862,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.11267
                    },
                    "phonetics_features": {
                        "total_time": 1.16,
                        "articulation_rate": 3.64964,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.822
                    }
                },
                {
                    "id": 151,
                    "act": "We're a bit behind.",
                    "start_time": 775.33,
                    "end_time": 776.97,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 721620223.60414,
                        "speech_rate": 3.04878,
                        "articulation_rate": 5.61798,
                        "phonation_time_ratio": 0.54268,
                        "mean_length_of_runs": 0.2,
                        "silent_pauses_rate": 0.60976,
                        "MPD": 0.15
                    },
                    "phonetics_features": {
                        "total_time": 1.64,
                        "articulation_rate": 5.61798,
                        "silent_pauses": 1,
                        "total_syllables": 5,
                        "phonation_time": 0.89
                    }
                },
                {
                    "id": 154,
                    "act": "Yeah.",
                    "start_time": 806.46,
                    "end_time": 806.98,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2609238385.53107,
                        "speech_rate": 1.92308,
                        "articulation_rate": 2.29358,
                        "phonation_time_ratio": 0.83846,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.084
                    },
                    "phonetics_features": {
                        "total_time": 0.52,
                        "articulation_rate": 2.29358,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.436
                    }
                },
                {
                    "id": 155,
                    "act": "Right, so do you think that should be like a main design aim of our remote control d you know,",
                    "start_time": 811.51,
                    "end_time": 815.56,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 499160300.87936,
                        "speech_rate": 5.18519,
                        "articulation_rate": 5.83333,
                        "phonation_time_ratio": 0.88889,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.02143
                    },
                    "phonetics_features": {
                        "total_time": 4.05,
                        "articulation_rate": 5.83333,
                        "silent_pauses": 0,
                        "total_syllables": 21,
                        "phonation_time": 3.6
                    }
                },
                {
                    "id": 156,
                    "act": "do your your satellite and your regular telly and your V_C_R_ and everything?",
                    "start_time": 815.56,
                    "end_time": 820.83,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 287671460.59994,
                        "speech_rate": 3.79507,
                        "articulation_rate": 5.81395,
                        "phonation_time_ratio": 0.65275,
                        "mean_length_of_runs": 0.05,
                        "silent_pauses_rate": 0.18975,
                        "MPD": 0.0915
                    },
                    "phonetics_features": {
                        "total_time": 5.27,
                        "articulation_rate": 5.81395,
                        "silent_pauses": 1,
                        "total_syllables": 20,
                        "phonation_time": 3.44
                    }
                },
                {
                    "id": 157,
                    "act": "Mm-hmm.",
                    "start_time": 832.76,
                    "end_time": 833.2,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 707197327.53282,
                        "speech_rate": 2.27273,
                        "articulation_rate": 2.27273,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.44,
                        "articulation_rate": 2.27273,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.44
                    }
                },
                {
                    "id": 158,
                    "act": "Yeah.",
                    "start_time": 840.25,
                    "end_time": 840.69,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 707197327.53282,
                        "speech_rate": 2.27273,
                        "articulation_rate": 2.27273,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.44,
                        "articulation_rate": 2.27273,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.44
                    }
                },
                {
                    "id": 159,
                    "act": "Or even like, you know, notes about um what you wanna watch.",
                    "start_time": 843.99,
                    "end_time": 847.62,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1221819230.27639,
                        "speech_rate": 4.40771,
                        "articulation_rate": 5.20156,
                        "phonation_time_ratio": 0.84738,
                        "mean_length_of_runs": 0.0625,
                        "silent_pauses_rate": 0.27548,
                        "MPD": 0.03462
                    },
                    "phonetics_features": {
                        "total_time": 3.63,
                        "articulation_rate": 5.20156,
                        "silent_pauses": 1,
                        "total_syllables": 16,
                        "phonation_time": 3.076
                    }
                },
                {
                    "id": 160,
                    "act": "Like you might put in there oh I want to watch such and such and look a",
                    "start_time": 847.62,
                    "end_time": 850.33,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10139707124.77506,
                        "speech_rate": 6.27306,
                        "articulation_rate": 6.27306,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.71,
                        "articulation_rate": 6.27306,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 2.71
                    }
                },
                {
                    "id": 161,
                    "act": "Oh that's a good idea.",
                    "start_time": 850.33,
                    "end_time": 851.55,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2618867764.25204,
                        "speech_rate": 4.91803,
                        "articulation_rate": 6.65188,
                        "phonation_time_ratio": 0.73934,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.053
                    },
                    "phonetics_features": {
                        "total_time": 1.22,
                        "articulation_rate": 6.65188,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 0.902
                    }
                },
                {
                    "id": 162,
                    "act": "So extra functionalities.",
                    "start_time": 851.55,
                    "end_time": 853.03,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 223413789.35479,
                        "speech_rate": 5.40541,
                        "articulation_rate": 6.09756,
                        "phonation_time_ratio": 0.88649,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.021
                    },
                    "phonetics_features": {
                        "total_time": 1.48,
                        "articulation_rate": 6.09756,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.312
                    }
                },
                {
                    "id": 163,
                    "act": "Mm-hmm.",
                    "start_time": 866.59,
                    "end_time": 867.24,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 479218630.44704,
                        "speech_rate": 1.53846,
                        "articulation_rate": 1.64474,
                        "phonation_time_ratio": 0.93538,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.042
                    },
                    "phonetics_features": {
                        "total_time": 0.65,
                        "articulation_rate": 1.64474,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.608
                    }
                },
                {
                    "id": 164,
                    "act": "Hmm.",
                    "start_time": 876.88,
                    "end_time": 877.46,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 214107436.7465,
                        "speech_rate": 1.72414,
                        "articulation_rate": 1.93798,
                        "phonation_time_ratio": 0.88966,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.064
                    },
                    "phonetics_features": {
                        "total_time": 0.58,
                        "articulation_rate": 1.93798,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.516
                    }
                },
                {
                    "id": 167,
                    "act": "Um okay,",
                    "start_time": 883.05,
                    "end_time": 885.66,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10139570961.05183,
                        "speech_rate": 1.14943,
                        "articulation_rate": 1.87266,
                        "phonation_time_ratio": 0.61379,
                        "mean_length_of_runs": 0.66667,
                        "silent_pauses_rate": 0.76628,
                        "MPD": 0.336
                    },
                    "phonetics_features": {
                        "total_time": 2.61,
                        "articulation_rate": 1.87266,
                        "silent_pauses": 2,
                        "total_syllables": 3,
                        "phonation_time": 1.602
                    }
                },
                {
                    "id": 168,
                    "act": "uh I'd wel",
                    "start_time": 885.66,
                    "end_time": 886.62,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 353728037.87413,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.125,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.96,
                        "articulation_rate": 3.125,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.96
                    }
                },
                {
                    "id": 166,
                    "act": "we're gonna have to wrap up pretty quickly in the next couple of minutes.",
                    "start_time": 886.62,
                    "end_time": 889.88,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 360600048.96967,
                        "speech_rate": 5.52147,
                        "articulation_rate": 6.62739,
                        "phonation_time_ratio": 0.83313,
                        "mean_length_of_runs": 0.05556,
                        "silent_pauses_rate": 0.30675,
                        "MPD": 0.03022
                    },
                    "phonetics_features": {
                        "total_time": 3.26,
                        "articulation_rate": 6.62739,
                        "silent_pauses": 1,
                        "total_syllables": 18,
                        "phonation_time": 2.716
                    }
                },
                {
                    "id": 169,
                    "act": "Um I'll just check we've nothing else",
                    "start_time": 889.88,
                    "end_time": 891.96,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 225253439.81035,
                        "speech_rate": 3.84615,
                        "articulation_rate": 5.40541,
                        "phonation_time_ratio": 0.71154,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.075
                    },
                    "phonetics_features": {
                        "total_time": 2.08,
                        "articulation_rate": 5.40541,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.48
                    }
                },
                {
                    "id": 170,
                    "act": ". Okay.",
                    "start_time": 891.96,
                    "end_time": 892.58,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2611839842.36041,
                        "speech_rate": 3.22581,
                        "articulation_rate": 7.8125,
                        "phonation_time_ratio": 0.4129,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.182
                    },
                    "phonetics_features": {
                        "total_time": 0.62,
                        "articulation_rate": 7.8125,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.256
                    }
                },
                {
                    "id": 171,
                    "act": "Um so anything else anybody wants to add about what they don't like about remote controls they've used,",
                    "start_time": 892.58,
                    "end_time": 898.27,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 190511879.60282,
                        "speech_rate": 4.92091,
                        "articulation_rate": 5.32117,
                        "phonation_time_ratio": 0.92478,
                        "mean_length_of_runs": 0.03571,
                        "silent_pauses_rate": 0.17575,
                        "MPD": 0.01529
                    },
                    "phonetics_features": {
                        "total_time": 5.69,
                        "articulation_rate": 5.32117,
                        "silent_pauses": 1,
                        "total_syllables": 28,
                        "phonation_time": 5.262
                    }
                },
                {
                    "id": 172,
                    "act": "what they would really like to be part of this new one at all?",
                    "start_time": 898.27,
                    "end_time": 902.62,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 491207590.64086,
                        "speech_rate": 3.21839,
                        "articulation_rate": 4.72654,
                        "phonation_time_ratio": 0.68092,
                        "mean_length_of_runs": 0.21429,
                        "silent_pauses_rate": 0.68966,
                        "MPD": 0.09914
                    },
                    "phonetics_features": {
                        "total_time": 4.35,
                        "articulation_rate": 4.72654,
                        "silent_pauses": 3,
                        "total_syllables": 14,
                        "phonation_time": 2.962
                    }
                },
                {
                    "id": 173,
                    "act": "You keep losing them.",
                    "start_time": 904.6,
                    "end_time": 905.58,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 220246277.13798,
                        "speech_rate": 5.10204,
                        "articulation_rate": 5.31915,
                        "phonation_time_ratio": 0.95918,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.008
                    },
                    "phonetics_features": {
                        "total_time": 0.98,
                        "articulation_rate": 5.31915,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 0.94
                    }
                },
                {
                    "id": 174,
                    "act": "Okay.",
                    "start_time": 905.58,
                    "end_time": 906.08,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 146361111.08889,
                        "speech_rate": 4.0,
                        "articulation_rate": 4.0,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.5,
                        "articulation_rate": 4.0,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.5
                    }
                },
                {
                    "id": 175,
                    "act": "Yeah.",
                    "start_time": 913.17,
                    "end_time": 914.71,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 721248421.10266,
                        "speech_rate": 0.64935,
                        "articulation_rate": 1.52439,
                        "phonation_time_ratio": 0.42597,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.884
                    },
                    "phonetics_features": {
                        "total_time": 1.54,
                        "articulation_rate": 1.52439,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.656
                    }
                },
                {
                    "id": 178,
                    "act": "W You get those ones where you can, if you like, whistle or make a really high pitched noise they beep.",
                    "start_time": 914.71,
                    "end_time": 920.04,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1222677771.85781,
                        "speech_rate": 4.3152,
                        "articulation_rate": 5.44508,
                        "phonation_time_ratio": 0.7925,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.04809
                    },
                    "phonetics_features": {
                        "total_time": 5.33,
                        "articulation_rate": 5.44508,
                        "silent_pauses": 0,
                        "total_syllables": 23,
                        "phonation_time": 4.224
                    }
                },
                {
                    "id": 179,
                    "act": "There",
                    "start_time": 920.04,
                    "end_time": 920.5,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 344075124.6273,
                        "speech_rate": 2.17391,
                        "articulation_rate": 2.29358,
                        "phonation_time_ratio": 0.94783,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.024
                    },
                    "phonetics_features": {
                        "total_time": 0.46,
                        "articulation_rate": 2.29358,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.436
                    }
                },
                {
                    "id": 180,
                    "act": "I mean is that something we'd want to include, do you think?",
                    "start_time": 920.5,
                    "end_time": 922.53,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1219729687.39084,
                        "speech_rate": 7.38916,
                        "articulation_rate": 7.70021,
                        "phonation_time_ratio": 0.95961,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.00547
                    },
                    "phonetics_features": {
                        "total_time": 2.03,
                        "articulation_rate": 7.70021,
                        "silent_pauses": 0,
                        "total_syllables": 15,
                        "phonation_time": 1.948
                    }
                },
                {
                    "id": 181,
                    "act": "Dunno.",
                    "start_time": 925.37,
                    "end_time": 926.64,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 275832774.11272,
                        "speech_rate": 1.5748,
                        "articulation_rate": 6.57895,
                        "phonation_time_ratio": 0.23937,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.483
                    },
                    "phonetics_features": {
                        "total_time": 1.27,
                        "articulation_rate": 6.57895,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.304
                    }
                },
                {
                    "id": 182,
                    "act": "Okay maybe.",
                    "start_time": 926.64,
                    "end_time": 927.4,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 351290886.21073,
                        "speech_rate": 3.94737,
                        "articulation_rate": 4.26136,
                        "phonation_time_ratio": 0.92632,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01867
                    },
                    "phonetics_features": {
                        "total_time": 0.76,
                        "articulation_rate": 4.26136,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.704
                    }
                },
                {
                    "id": 177,
                    "act": "My goodness.",
                    "start_time": 937.0,
                    "end_time": 937.62,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2611839842.36041,
                        "speech_rate": 4.83871,
                        "articulation_rate": 6.14754,
                        "phonation_time_ratio": 0.7871,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.044
                    },
                    "phonetics_features": {
                        "total_time": 0.62,
                        "articulation_rate": 6.14754,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.488
                    }
                },
                {
                    "id": 183,
                    "act": "Still feels quite primitive.",
                    "start_time": 946.26,
                    "end_time": 948.04,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 224484291.28998,
                        "speech_rate": 3.37079,
                        "articulation_rate": 5.0,
                        "phonation_time_ratio": 0.67416,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.09667
                    },
                    "phonetics_features": {
                        "total_time": 1.78,
                        "articulation_rate": 5.0,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.2
                    }
                },
                {
                    "id": 184,
                    "act": "Maybe like a touch screen or something?",
                    "start_time": 951.41,
                    "end_time": 952.78,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 276365567.55265,
                        "speech_rate": 6.56934,
                        "articulation_rate": 6.56934,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.37,
                        "articulation_rate": 6.56934,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.37
                    }
                },
                {
                    "id": 185,
                    "act": "Okay.",
                    "start_time": 954.09,
                    "end_time": 954.42,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1198369036.64903,
                        "speech_rate": 6.06061,
                        "articulation_rate": 6.17284,
                        "phonation_time_ratio": 0.98182,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.003
                    },
                    "phonetics_features": {
                        "total_time": 0.33,
                        "articulation_rate": 6.17284,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.324
                    }
                },
                {
                    "id": 186,
                    "act": "Uh-huh, okay.",
                    "start_time": 956.36,
                    "end_time": 957.42,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 354618034.32091,
                        "speech_rate": 3.77358,
                        "articulation_rate": 3.80228,
                        "phonation_time_ratio": 0.99245,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.002
                    },
                    "phonetics_features": {
                        "total_time": 1.06,
                        "articulation_rate": 3.80228,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 1.052
                    }
                },
                {
                    "id": 187,
                    "act": "Well I guess that's up to our industrial designer.",
                    "start_time": 957.42,
                    "end_time": 959.3,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 224767224.74018,
                        "speech_rate": 6.91489,
                        "articulation_rate": 6.91489,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.88,
                        "articulation_rate": 6.91489,
                        "silent_pauses": 0,
                        "total_syllables": 13,
                        "phonation_time": 1.88
                    }
                },
                {
                    "id": 189,
                    "act": "It looks better.",
                    "start_time": 962.22,
                    "end_time": 963.35,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1216066937.37851,
                        "speech_rate": 3.53982,
                        "articulation_rate": 5.10204,
                        "phonation_time_ratio": 0.69381,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0865
                    },
                    "phonetics_features": {
                        "total_time": 1.13,
                        "articulation_rate": 5.10204,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 0.784
                    }
                },
                {
                    "id": 190,
                    "act": "Yeah.",
                    "start_time": 969.0,
                    "end_time": 969.47,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 264232667.11403,
                        "speech_rate": 2.12766,
                        "articulation_rate": 2.23214,
                        "phonation_time_ratio": 0.95319,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.022
                    },
                    "phonetics_features": {
                        "total_time": 0.47,
                        "articulation_rate": 2.23214,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.448
                    }
                },
                {
                    "id": 191,
                    "act": "Okay.",
                    "start_time": 971.85,
                    "end_time": 972.39,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 710626682.80717,
                        "speech_rate": 3.7037,
                        "articulation_rate": 4.31034,
                        "phonation_time_ratio": 0.85926,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.038
                    },
                    "phonetics_features": {
                        "total_time": 0.54,
                        "articulation_rate": 4.31034,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.464
                    }
                },
                {
                    "id": 192,
                    "act": "Okay.",
                    "start_time": 975.24,
                    "end_time": 975.63,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 169622849.41869,
                        "speech_rate": 5.12821,
                        "articulation_rate": 8.40336,
                        "phonation_time_ratio": 0.61026,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.076
                    },
                    "phonetics_features": {
                        "total_time": 0.39,
                        "articulation_rate": 8.40336,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.238
                    }
                },
                {
                    "id": 198,
                    "act": "Right, well um",
                    "start_time": 977.17,
                    "end_time": 978.62,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 486816018.75143,
                        "speech_rate": 2.06897,
                        "articulation_rate": 2.08914,
                        "phonation_time_ratio": 0.99034,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.00467
                    },
                    "phonetics_features": {
                        "total_time": 1.45,
                        "articulation_rate": 2.08914,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 1.436
                    }
                },
                {
                    "id": 193,
                    "act": "so just to wrap up",
                    "start_time": 978.62,
                    "end_time": 979.73,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10134714550.34982,
                        "speech_rate": 4.5045,
                        "articulation_rate": 4.5045,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.11,
                        "articulation_rate": 4.5045,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.11
                    }
                },
                {
                    "id": 194,
                    "act": "the next meeting's gonna be in thirty minutes.",
                    "start_time": 979.73,
                    "end_time": 981.67,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 722511589.89463,
                        "speech_rate": 5.6701,
                        "articulation_rate": 5.6701,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.94,
                        "articulation_rate": 5.6701,
                        "silent_pauses": 0,
                        "total_syllables": 11,
                        "phonation_time": 1.94
                    }
                },
                {
                    "id": 195,
                    "act": "So that's about um about ten to twelve by my watch.",
                    "start_time": 981.67,
                    "end_time": 985.49,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2624153884.94042,
                        "speech_rate": 3.40314,
                        "articulation_rate": 4.4735,
                        "phonation_time_ratio": 0.76073,
                        "mean_length_of_runs": 0.07692,
                        "silent_pauses_rate": 0.26178,
                        "MPD": 0.07031
                    },
                    "phonetics_features": {
                        "total_time": 3.82,
                        "articulation_rate": 4.4735,
                        "silent_pauses": 1,
                        "total_syllables": 13,
                        "phonation_time": 2.906
                    }
                },
                {
                    "id": 196,
                    "act": "Um so inbetween now and then, um as the industrial designer, you're gonna be working on you know the actual working design of it",
                    "start_time": 985.49,
                    "end_time": 994.81,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2625670495.79725,
                        "speech_rate": 3.43348,
                        "articulation_rate": 4.49817,
                        "phonation_time_ratio": 0.7633,
                        "mean_length_of_runs": 0.125,
                        "silent_pauses_rate": 0.42918,
                        "MPD": 0.06894
                    },
                    "phonetics_features": {
                        "total_time": 9.32,
                        "articulation_rate": 4.49817,
                        "silent_pauses": 4,
                        "total_syllables": 32,
                        "phonation_time": 7.114
                    }
                },
                {
                    "id": 197,
                    "act": "so y you know what you're doing there.",
                    "start_time": 994.81,
                    "end_time": 996.69,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 233603497.75223,
                        "speech_rate": 4.25532,
                        "articulation_rate": 5.47196,
                        "phonation_time_ratio": 0.77766,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.05225
                    },
                    "phonetics_features": {
                        "total_time": 1.88,
                        "articulation_rate": 5.47196,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.462
                    }
                },
                {
                    "id": 199,
                    "act": "Um for user interface, technical functions,",
                    "start_time": 996.69,
                    "end_time": 1000.99,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 162194657.32739,
                        "speech_rate": 2.7907,
                        "articulation_rate": 3.79027,
                        "phonation_time_ratio": 0.73628,
                        "mean_length_of_runs": 0.16667,
                        "silent_pauses_rate": 0.46512,
                        "MPD": 0.0945
                    },
                    "phonetics_features": {
                        "total_time": 4.3,
                        "articulation_rate": 3.79027,
                        "silent_pauses": 2,
                        "total_syllables": 12,
                        "phonation_time": 3.166
                    }
                },
                {
                    "id": 200,
                    "act": "I guess that's you know like what we've been talking about,",
                    "start_time": 1000.99,
                    "end_time": 1003.16,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 278901172.32216,
                        "speech_rate": 5.99078,
                        "articulation_rate": 5.99078,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.17,
                        "articulation_rate": 5.99078,
                        "silent_pauses": 0,
                        "total_syllables": 13,
                        "phonation_time": 2.17
                    }
                },
                {
                    "id": 201,
                    "act": "what it'll actually do.",
                    "start_time": 1003.16,
                    "end_time": 1004.08,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2616437539.1915,
                        "speech_rate": 6.52174,
                        "articulation_rate": 6.52174,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.92,
                        "articulation_rate": 6.52174,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 0.92
                    }
                },
                {
                    "id": 202,
                    "act": "Um and uh marketing executive,",
                    "start_time": 1004.08,
                    "end_time": 1008.75,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 281286350.88506,
                        "speech_rate": 2.14133,
                        "articulation_rate": 2.76702,
                        "phonation_time_ratio": 0.77388,
                        "mean_length_of_runs": 0.2,
                        "silent_pauses_rate": 0.42827,
                        "MPD": 0.1056
                    },
                    "phonetics_features": {
                        "total_time": 4.67,
                        "articulation_rate": 2.76702,
                        "silent_pauses": 2,
                        "total_syllables": 10,
                        "phonation_time": 3.614
                    }
                },
                {
                    "id": 203,
                    "act": "you'll be just thinking about what it actually what, you know, what requirements it has to has to fulfil",
                    "start_time": 1010.02,
                    "end_time": 1016.48,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 392672749.27089,
                        "speech_rate": 4.02477,
                        "articulation_rate": 5.58419,
                        "phonation_time_ratio": 0.72074,
                        "mean_length_of_runs": 0.11538,
                        "silent_pauses_rate": 0.4644,
                        "MPD": 0.06938
                    },
                    "phonetics_features": {
                        "total_time": 6.46,
                        "articulation_rate": 5.58419,
                        "silent_pauses": 3,
                        "total_syllables": 26,
                        "phonation_time": 4.656
                    }
                },
                {
                    "id": 204,
                    "act": "and you'll all get instructions emailed to you, I guess.",
                    "start_time": 1016.48,
                    "end_time": 1019.31,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 1221064580.89469,
                        "speech_rate": 4.947,
                        "articulation_rate": 5.46875,
                        "phonation_time_ratio": 0.90459,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01929
                    },
                    "phonetics_features": {
                        "total_time": 2.83,
                        "articulation_rate": 5.46875,
                        "silent_pauses": 0,
                        "total_syllables": 14,
                        "phonation_time": 2.56
                    }
                },
                {
                    "id": 205,
                    "act": "Um.",
                    "start_time": 1021.55,
                    "end_time": 1022.56,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10133902927.91819,
                        "speech_rate": 0.9901,
                        "articulation_rate": 1.44928,
                        "phonation_time_ratio": 0.68317,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.32
                    },
                    "phonetics_features": {
                        "total_time": 1.01,
                        "articulation_rate": 1.44928,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.69
                    }
                },
                {
                    "id": 206,
                    "act": "Yeah, so it's th the functional design stage is next, I guess.",
                    "start_time": 1028.05,
                    "end_time": 1031.66,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10140597838.48509,
                        "speech_rate": 3.60111,
                        "articulation_rate": 4.08291,
                        "phonation_time_ratio": 0.88199,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.03277
                    },
                    "phonetics_features": {
                        "total_time": 3.61,
                        "articulation_rate": 4.08291,
                        "silent_pauses": 0,
                        "total_syllables": 13,
                        "phonation_time": 3.184
                    }
                },
                {
                    "id": 207,
                    "act": "And uh",
                    "start_time": 1034.47,
                    "end_time": 1035.27,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 152742205.20839,
                        "speech_rate": 2.5,
                        "articulation_rate": 2.53165,
                        "phonation_time_ratio": 0.9875,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.005
                    },
                    "phonetics_features": {
                        "total_time": 0.8,
                        "articulation_rate": 2.53165,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.79
                    }
                },
                {
                    "id": 208,
                    "act": "and that's the end of the meeting.",
                    "start_time": 1036.47,
                    "end_time": 1037.69,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2618867764.25204,
                        "speech_rate": 4.91803,
                        "articulation_rate": 5.20833,
                        "phonation_time_ratio": 0.94426,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01133
                    },
                    "phonetics_features": {
                        "total_time": 1.22,
                        "articulation_rate": 5.20833,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.152
                    }
                },
                {
                    "id": 209,
                    "act": "So I got that little message a lot sooner than I thought I would, so",
                    "start_time": 1039.12,
                    "end_time": 1042.57,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 490623271.54881,
                        "speech_rate": 4.92754,
                        "articulation_rate": 5.06857,
                        "phonation_time_ratio": 0.97217,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.00565
                    },
                    "phonetics_features": {
                        "total_time": 3.45,
                        "articulation_rate": 5.06857,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 3.354
                    }
                },
                {
                    "id": 210,
                    "act": "Mm-hmm.",
                    "start_time": 1049.54,
                    "end_time": 1050.04,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 146361111.08889,
                        "speech_rate": 2.0,
                        "articulation_rate": 2.04918,
                        "phonation_time_ratio": 0.976,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.012
                    },
                    "phonetics_features": {
                        "total_time": 0.5,
                        "articulation_rate": 2.04918,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.488
                    }
                },
                {
                    "id": 211,
                    "act": "Uh-huh, yeah.",
                    "start_time": 1056.3,
                    "end_time": 1057.68,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 222957251.73025,
                        "speech_rate": 2.17391,
                        "articulation_rate": 3.75,
                        "phonation_time_ratio": 0.57971,
                        "mean_length_of_runs": 0.33333,
                        "silent_pauses_rate": 0.72464,
                        "MPD": 0.19333
                    },
                    "phonetics_features": {
                        "total_time": 1.38,
                        "articulation_rate": 3.75,
                        "silent_pauses": 1,
                        "total_syllables": 3,
                        "phonation_time": 0.8
                    }
                },
                {
                    "id": 212,
                    "act": "Th",
                    "start_time": 1068.76,
                    "end_time": 1068.8,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 625000000.0,
                        "speech_rate": 25.0,
                        "articulation_rate": 25.0,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.04,
                        "articulation_rate": 25.0,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.03999999999996362
                    }
                },
                {
                    "id": 213,
                    "act": "Okay,",
                    "start_time": 1073.56,
                    "end_time": 1073.97,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10121675032.25383,
                        "speech_rate": 4.87805,
                        "articulation_rate": 4.97512,
                        "phonation_time_ratio": 0.98049,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.004
                    },
                    "phonetics_features": {
                        "total_time": 0.41,
                        "articulation_rate": 4.97512,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.402
                    }
                },
                {
                    "id": 214,
                    "act": "well just very quickly",
                    "start_time": 1073.97,
                    "end_time": 1075.12,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 485151697.65403,
                        "speech_rate": 5.21739,
                        "articulation_rate": 5.21739,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.15,
                        "articulation_rate": 5.21739,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.15
                    }
                },
                {
                    "id": 215,
                    "act": "'cause this we're supposed to finish now.",
                    "start_time": 1075.12,
                    "end_time": 1076.64,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2620370444.11668,
                        "speech_rate": 6.57895,
                        "articulation_rate": 6.57895,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.52,
                        "articulation_rate": 6.57895,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 1.52
                    }
                },
                {
                    "id": 216,
                    "act": "Um I guess that's up to us,",
                    "start_time": 1076.64,
                    "end_time": 1079.1,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 359637430.225,
                        "speech_rate": 2.84553,
                        "articulation_rate": 3.37187,
                        "phonation_time_ratio": 0.8439,
                        "mean_length_of_runs": 0.14286,
                        "silent_pauses_rate": 0.4065,
                        "MPD": 0.05486
                    },
                    "phonetics_features": {
                        "total_time": 2.46,
                        "articulation_rate": 3.37187,
                        "silent_pauses": 1,
                        "total_syllables": 7,
                        "phonation_time": 2.076
                    }
                },
                {
                    "id": 217,
                    "act": "I mean you probably want some kind of unique selling point of it,",
                    "start_time": 1079.1,
                    "end_time": 1082.39,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 189260207.43418,
                        "speech_rate": 5.16717,
                        "articulation_rate": 6.02837,
                        "phonation_time_ratio": 0.85714,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.02765
                    },
                    "phonetics_features": {
                        "total_time": 3.29,
                        "articulation_rate": 6.02837,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 2.82
                    }
                },
                {
                    "id": 218,
                    "act": "so um, you know",
                    "start_time": 1082.39,
                    "end_time": 1084.8,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10139265429.80791,
                        "speech_rate": 1.65975,
                        "articulation_rate": 2.68817,
                        "phonation_time_ratio": 0.61743,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.41494,
                        "MPD": 0.2305
                    },
                    "phonetics_features": {
                        "total_time": 2.41,
                        "articulation_rate": 2.68817,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 1.488
                    }
                },
                {
                    "id": 219,
                    "act": "Yeah.",
                    "start_time": 1087.59,
                    "end_time": 1088.2,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10128207154.96697,
                        "speech_rate": 1.63934,
                        "articulation_rate": 2.23214,
                        "phonation_time_ratio": 0.73443,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.162
                    },
                    "phonetics_features": {
                        "total_time": 0.61,
                        "articulation_rate": 2.23214,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.448
                    }
                },
                {
                    "id": 220,
                    "act": "Mm-hmm.",
                    "start_time": 1093.82,
                    "end_time": 1094.41,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 176660518.41617,
                        "speech_rate": 1.69492,
                        "articulation_rate": 2.5,
                        "phonation_time_ratio": 0.67797,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.19
                    },
                    "phonetics_features": {
                        "total_time": 0.59,
                        "articulation_rate": 2.5,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.4
                    }
                },
                {
                    "id": 221,
                    "act": "Yeah.",
                    "start_time": 1095.78,
                    "end_time": 1096.16,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 206794507.38094,
                        "speech_rate": 2.63158,
                        "articulation_rate": 2.97619,
                        "phonation_time_ratio": 0.88421,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.044
                    },
                    "phonetics_features": {
                        "total_time": 0.38,
                        "articulation_rate": 2.97619,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.336
                    }
                },
                {
                    "id": 222,
                    "act": "Okay.",
                    "start_time": 1098.51,
                    "end_time": 1099.43,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 2616437539.1915,
                        "speech_rate": 2.17391,
                        "articulation_rate": 8.92857,
                        "phonation_time_ratio": 0.24348,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.348
                    },
                    "phonetics_features": {
                        "total_time": 0.92,
                        "articulation_rate": 8.92857,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.224
                    }
                },
                {
                    "id": 225,
                    "act": "Right, okay, we'll that's that's the end of the meeting, then. Um",
                    "start_time": 1099.43,
                    "end_time": 1103.2,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 280787264.12908,
                        "speech_rate": 3.18302,
                        "articulation_rate": 3.64078,
                        "phonation_time_ratio": 0.87427,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.26525,
                        "MPD": 0.0395
                    },
                    "phonetics_features": {
                        "total_time": 3.77,
                        "articulation_rate": 3.64078,
                        "silent_pauses": 1,
                        "total_syllables": 12,
                        "phonation_time": 3.296
                    }
                },
                {
                    "id": 223,
                    "act": "So, uh",
                    "start_time": 1104.58,
                    "end_time": 1105.58,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 154976773.10716,
                        "speech_rate": 2.0,
                        "articulation_rate": 2.5,
                        "phonation_time_ratio": 0.8,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.1
                    },
                    "phonetics_features": {
                        "total_time": 1.0,
                        "articulation_rate": 2.5,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.8
                    }
                },
                {
                    "id": 224,
                    "act": "thank you all for coming.",
                    "start_time": 1106.58,
                    "end_time": 1109.39,
                    "speaker_id": "B",
                    "measures": {
                        "short_term_energy": 10139833761.57715,
                        "speech_rate": 2.13523,
                        "articulation_rate": 2.67857,
                        "phonation_time_ratio": 0.79715,
                        "mean_length_of_runs": 0.16667,
                        "silent_pauses_rate": 0.35587,
                        "MPD": 0.095
                    },
                    "phonetics_features": {
                        "total_time": 2.81,
                        "articulation_rate": 2.67857,
                        "silent_pauses": 1,
                        "total_syllables": 6,
                        "phonation_time": 2.24
                    }
                },
                {
                    "id": 1,
                    "act": "Um I'm Craig and I'm User Interface.",
                    "start_time": 85.99,
                    "end_time": 88.71,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 1221663088.8687,
                        "speech_rate": 4.95627,
                        "articulation_rate": 4.95627,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.43,
                        "articulation_rate": 4.95627,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 3.43
                    }
                },
                {
                    "id": 2,
                    "act": "Yeah.",
                    "start_time": 140.47,
                    "end_time": 140.83,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 10140926184.57428,
                        "speech_rate": 3.89294,
                        "articulation_rate": 3.89294,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 4.11,
                        "articulation_rate": 3.89294,
                        "silent_pauses": 0,
                        "total_syllables": 16,
                        "phonation_time": 4.11
                    }
                },
                {
                    "id": 4,
                    "act": "Well, my favourite animal would be a monkey.",
                    "start_time": 255.07,
                    "end_time": 257.26,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 279588584.93521,
                        "speech_rate": 3.89105,
                        "articulation_rate": 3.89105,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.57,
                        "articulation_rate": 3.89105,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 2.57
                    }
                },
                {
                    "id": 7,
                    "act": "Then they're small cute and furry,",
                    "start_time": 268.0,
                    "end_time": 270.01,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 279980592.7542,
                        "speech_rate": 3.83275,
                        "articulation_rate": 5.90763,
                        "phonation_time_ratio": 0.64878,
                        "mean_length_of_runs": 0.09091,
                        "silent_pauses_rate": 0.34843,
                        "MPD": 0.09164
                    },
                    "phonetics_features": {
                        "total_time": 2.87,
                        "articulation_rate": 5.90763,
                        "silent_pauses": 1,
                        "total_syllables": 11,
                        "phonation_time": 1.862
                    }
                },
                {
                    "id": 8,
                    "act": "and uh when planet of the apes becomes real, I'm gonna be up there with them.",
                    "start_time": 270.01,
                    "end_time": 273.99,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 2599871226.455,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.125,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.32,
                        "articulation_rate": 3.125,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.32
                    }
                },
                {
                    "id": 19,
                    "act": "Yeah.",
                    "start_time": 777.32,
                    "end_time": 777.89,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 10139833769.57715,
                        "speech_rate": 3.20285,
                        "articulation_rate": 3.20285,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.81,
                        "articulation_rate": 3.20285,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 2.81
                    }
                },
                {
                    "id": 20,
                    "act": "I know um",
                    "start_time": 792.52,
                    "end_time": 793.22,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 274482259.33729,
                        "speech_rate": 1.86916,
                        "articulation_rate": 1.9305,
                        "phonation_time_ratio": 0.96822,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.017
                    },
                    "phonetics_features": {
                        "total_time": 1.07,
                        "articulation_rate": 1.9305,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 1.036
                    }
                },
                {
                    "id": 17,
                    "act": "My parents went out and bought um remote controls because um they got fed up of having four or five different remote controls for each things the house.",
                    "start_time": 794.52,
                    "end_time": 801.38,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 490848792.98222,
                        "speech_rate": 4.26667,
                        "articulation_rate": 4.26667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.75,
                        "articulation_rate": 4.26667,
                        "silent_pauses": 0,
                        "total_syllables": 16,
                        "phonation_time": 3.75
                    }
                },
                {
                    "id": 18,
                    "act": "So um for them it was just how many devices control.",
                    "start_time": 801.38,
                    "end_time": 804.33,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 153976773.10716,
                        "speech_rate": 8.88889,
                        "articulation_rate": 8.88889,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.9,
                        "articulation_rate": 8.88889,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 0.9
                    }
                },
                {
                    "id": 21,
                    "act": "Uh.",
                    "start_time": 976.66,
                    "end_time": 976.73,
                    "speaker_id": "C",
                    "measures": {
                        "short_term_energy": 2618867764.25204,
                        "speech_rate": 5.7377,
                        "articulation_rate": 5.7377,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.22,
                        "articulation_rate": 5.7377,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.22
                    }
                },
                {
                    "id": 1,
                    "act": "Mm-hmm.",
                    "start_time": 67.21,
                    "end_time": 67.45,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1221663088.8687,
                        "speech_rate": 4.95627,
                        "articulation_rate": 4.95627,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.43,
                        "articulation_rate": 4.95627,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 3.43
                    }
                },
                {
                    "id": 2,
                    "act": "Great.",
                    "start_time": 74.89,
                    "end_time": 75.24,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10140926184.57428,
                        "speech_rate": 3.89294,
                        "articulation_rate": 3.89294,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 4.11,
                        "articulation_rate": 3.89294,
                        "silent_pauses": 0,
                        "total_syllables": 16,
                        "phonation_time": 4.11
                    }
                },
                {
                    "id": 3,
                    "act": "And I'm Andrew and I'm uh our marketing",
                    "start_time": 82.08,
                    "end_time": 84.46,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2620370444.11668,
                        "speech_rate": 5.26316,
                        "articulation_rate": 5.26316,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.52,
                        "articulation_rate": 5.26316,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.52
                    }
                },
                {
                    "id": 4,
                    "act": "expert.",
                    "start_time": 86.07,
                    "end_time": 86.5,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 279588584.93521,
                        "speech_rate": 3.89105,
                        "articulation_rate": 3.89105,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.57,
                        "articulation_rate": 3.89105,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 2.57
                    }
                },
                {
                    "id": 5,
                    "act": "Mm-hmm.",
                    "start_time": 137.12,
                    "end_time": 137.39,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10135397563.80354,
                        "speech_rate": 4.13223,
                        "articulation_rate": 4.13223,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.21,
                        "articulation_rate": 4.13223,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.21
                    }
                },
                {
                    "id": 6,
                    "act": "Mm-hmm. Yeah, that's that's it.",
                    "start_time": 138.96,
                    "end_time": 140.56,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 727134012.2246,
                        "speech_rate": 3.24427,
                        "articulation_rate": 3.87774,
                        "phonation_time_ratio": 0.83664,
                        "mean_length_of_runs": 0.05882,
                        "silent_pauses_rate": 0.19084,
                        "MPD": 0.05035
                    },
                    "phonetics_features": {
                        "total_time": 5.24,
                        "articulation_rate": 3.87774,
                        "silent_pauses": 1,
                        "total_syllables": 17,
                        "phonation_time": 4.384
                    }
                },
                {
                    "id": 7,
                    "act": "Yeah.",
                    "start_time": 141.8,
                    "end_time": 141.95,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 279980592.7542,
                        "speech_rate": 3.83275,
                        "articulation_rate": 5.90763,
                        "phonation_time_ratio": 0.64878,
                        "mean_length_of_runs": 0.09091,
                        "silent_pauses_rate": 0.34843,
                        "MPD": 0.09164
                    },
                    "phonetics_features": {
                        "total_time": 2.87,
                        "articulation_rate": 5.90763,
                        "silent_pauses": 1,
                        "total_syllables": 11,
                        "phonation_time": 1.862
                    }
                },
                {
                    "id": 8,
                    "act": "I will go. That's fine.",
                    "start_time": 166.67,
                    "end_time": 167.81,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2599871226.455,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.125,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.32,
                        "articulation_rate": 3.125,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.32
                    }
                },
                {
                    "id": 9,
                    "act": "Alright. So",
                    "start_time": 174.2,
                    "end_time": 176.69,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 159366324.37805,
                        "speech_rate": 2.63158,
                        "articulation_rate": 2.63158,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.9,
                        "articulation_rate": 2.63158,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.9
                    }
                },
                {
                    "id": 11,
                    "act": "This one here, right?",
                    "start_time": 181.39,
                    "end_time": 182.34,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 182645995.71613,
                        "speech_rate": 2.0202,
                        "articulation_rate": 2.0202,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.99,
                        "articulation_rate": 2.0202,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.99
                    }
                },
                {
                    "id": 14,
                    "act": "Okay. Very nice.",
                    "start_time": 183.93,
                    "end_time": 186.46,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1203777365.49706,
                        "speech_rate": 2.32558,
                        "articulation_rate": 2.32558,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.43,
                        "articulation_rate": 2.32558,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.43
                    }
                },
                {
                    "id": 15,
                    "act": "Alright.",
                    "start_time": 186.46,
                    "end_time": 187.46,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 490147195.28832,
                        "speech_rate": 1.69492,
                        "articulation_rate": 1.69492,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.95,
                        "articulation_rate": 1.69492,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 2.95
                    }
                },
                {
                    "id": 16,
                    "act": "My favourite animal is like",
                    "start_time": 187.46,
                    "end_time": 191.68,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 226145590.31086,
                        "speech_rate": 6.58915,
                        "articulation_rate": 6.58915,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.58,
                        "articulation_rate": 6.58915,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 2.58
                    }
                },
                {
                    "id": 17,
                    "act": "A beagle.",
                    "start_time": 203.45,
                    "end_time": 204.24,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 490848792.98222,
                        "speech_rate": 4.26667,
                        "articulation_rate": 4.26667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.75,
                        "articulation_rate": 4.26667,
                        "silent_pauses": 0,
                        "total_syllables": 16,
                        "phonation_time": 3.75
                    }
                },
                {
                    "id": 18,
                    "act": "Um",
                    "start_time": 211.97,
                    "end_time": 213.16,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 153976773.10716,
                        "speech_rate": 8.88889,
                        "articulation_rate": 8.88889,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.9,
                        "articulation_rate": 8.88889,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 0.9
                    }
                },
                {
                    "id": 20,
                    "act": "charac favourite characteristics of it? Is that right?",
                    "start_time": 213.16,
                    "end_time": 216.46,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 274482259.33729,
                        "speech_rate": 1.86916,
                        "articulation_rate": 1.9305,
                        "phonation_time_ratio": 0.96822,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.017
                    },
                    "phonetics_features": {
                        "total_time": 1.07,
                        "articulation_rate": 1.9305,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 1.036
                    }
                },
                {
                    "id": 23,
                    "act": "Uh, right, well basically um high priority for any animal for me is that they be willing to take a lot of physical affection from their family.",
                    "start_time": 216.46,
                    "end_time": 229.16,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 161508553.6374,
                        "speech_rate": 3.63636,
                        "articulation_rate": 3.63636,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.3,
                        "articulation_rate": 3.63636,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 3.3
                    }
                },
                {
                    "id": 24,
                    "act": "And, yeah that they have lots of personality",
                    "start_time": 229.16,
                    "end_time": 232.72,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 485791697.65403,
                        "speech_rate": 4.8,
                        "articulation_rate": 4.8,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.25,
                        "articulation_rate": 4.8,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.25
                    }
                },
                {
                    "id": 25,
                    "act": "and uh be fit and in robust good health.",
                    "start_time": 232.72,
                    "end_time": 237.96,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1217782264.15025,
                        "speech_rate": 6.29371,
                        "articulation_rate": 10.04464,
                        "phonation_time_ratio": 0.62657,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.05933
                    },
                    "phonetics_features": {
                        "total_time": 1.43,
                        "articulation_rate": 10.04464,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 0.896
                    }
                },
                {
                    "id": 26,
                    "act": "So this is blue.",
                    "start_time": 237.96,
                    "end_time": 239.85,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 277911791.06644,
                        "speech_rate": 0.56497,
                        "articulation_rate": 1.18765,
                        "phonation_time_ratio": 0.47571,
                        "mean_length_of_runs": 1.0,
                        "silent_pauses_rate": 0.56497,
                        "MPD": 0.928
                    },
                    "phonetics_features": {
                        "total_time": 1.77,
                        "articulation_rate": 1.18765,
                        "silent_pauses": 1,
                        "total_syllables": 1,
                        "phonation_time": 0.842
                    }
                },
                {
                    "id": 27,
                    "act": "Blue beagle.",
                    "start_time": 239.85,
                    "end_time": 241.42,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 221821800.40047,
                        "speech_rate": 0.84746,
                        "articulation_rate": 1.67224,
                        "phonation_time_ratio": 0.50678,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.582
                    },
                    "phonetics_features": {
                        "total_time": 1.18,
                        "articulation_rate": 1.67224,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.598
                    }
                },
                {
                    "id": 28,
                    "act": "My family's beagle.",
                    "start_time": 241.42,
                    "end_time": 242.41,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 184193840.5159,
                        "speech_rate": 6.72269,
                        "articulation_rate": 6.72269,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.19,
                        "articulation_rate": 6.72269,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.19
                    }
                },
                {
                    "id": 30,
                    "act": "I coulda told you a whole lot more about beagles.",
                    "start_time": 296.02,
                    "end_time": 298.03,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 252401129.98363,
                        "speech_rate": 3.7037,
                        "articulation_rate": 3.7037,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.27,
                        "articulation_rate": 3.7037,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.27
                    }
                },
                {
                    "id": 31,
                    "act": "Boy, let me tell you.",
                    "start_time": 298.03,
                    "end_time": 300.92,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 280299575.17282,
                        "speech_rate": 3.47003,
                        "articulation_rate": 3.47003,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 3.17,
                        "articulation_rate": 3.47003,
                        "silent_pauses": 0,
                        "total_syllables": 11,
                        "phonation_time": 3.17
                    }
                },
                {
                    "id": 32,
                    "act": "Impressionist.",
                    "start_time": 307.06,
                    "end_time": 307.9,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 7.737125245533627e+29,
                        "speech_rate": 4.5283,
                        "articulation_rate": 6.65927,
                        "phonation_time_ratio": 0.68,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.37736,
                        "MPD": 0.07067
                    },
                    "phonetics_features": {
                        "total_time": 5.3,
                        "articulation_rate": 6.65927,
                        "silent_pauses": 2,
                        "total_syllables": 24,
                        "phonation_time": 3.604
                    }
                },
                {
                    "id": 34,
                    "act": "Alright.",
                    "start_time": 338.48,
                    "end_time": 339.05,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2590105601.455,
                        "speech_rate": 4.54545,
                        "articulation_rate": 4.54545,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.22,
                        "articulation_rate": 4.54545,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.22
                    }
                },
                {
                    "id": 35,
                    "act": "Mm.",
                    "start_time": 341.85,
                    "end_time": 342.2,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2599871226.455,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.125,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.32,
                        "articulation_rate": 3.125,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.32
                    }
                },
                {
                    "id": 36,
                    "act": "Superb sketch, by the way.",
                    "start_time": 349.66,
                    "end_time": 350.84,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 153976773.10716,
                        "speech_rate": 6.66667,
                        "articulation_rate": 6.66667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.9,
                        "articulation_rate": 6.66667,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 0.9
                    }
                },
                {
                    "id": 38,
                    "act": "Yep.",
                    "start_time": 359.62,
                    "end_time": 359.9,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1219729687.39084,
                        "speech_rate": 3.94089,
                        "articulation_rate": 5.8309,
                        "phonation_time_ratio": 0.67586,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.08225
                    },
                    "phonetics_features": {
                        "total_time": 2.03,
                        "articulation_rate": 5.8309,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.372
                    }
                },
                {
                    "id": 40,
                    "act": "I see a dog in there.",
                    "start_time": 378.46,
                    "end_time": 379.99,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 721248421.10266,
                        "speech_rate": 4.54545,
                        "articulation_rate": 4.54545,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.54,
                        "articulation_rate": 4.54545,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.54
                    }
                },
                {
                    "id": 41,
                    "act": "Yep.",
                    "start_time": 379.99,
                    "end_time": 380.14,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 349559584.28137,
                        "speech_rate": 3.0303,
                        "articulation_rate": 3.0303,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.66,
                        "articulation_rate": 3.0303,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.66
                    }
                },
                {
                    "id": 42,
                    "act": "Now I see a rooster.",
                    "start_time": 382.82,
                    "end_time": 383.68,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 676020408.12245,
                        "speech_rate": 7.14286,
                        "articulation_rate": 7.14286,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.14,
                        "articulation_rate": 7.14286,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.14
                    }
                },
                {
                    "id": 43,
                    "act": "What kind is it?",
                    "start_time": 393.42,
                    "end_time": 394.21,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 316840277.88889,
                        "speech_rate": 6.25,
                        "articulation_rate": 6.25,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.16,
                        "articulation_rate": 6.25,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.16
                    }
                },
                {
                    "id": 46,
                    "act": "Is he aware that th it's his own cha tail he's chasing?",
                    "start_time": 431.27,
                    "end_time": 433.44,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 362010696.12475,
                        "speech_rate": 2.43506,
                        "articulation_rate": 3.66211,
                        "phonation_time_ratio": 0.66494,
                        "mean_length_of_runs": 0.2,
                        "silent_pauses_rate": 0.48701,
                        "MPD": 0.1376
                    },
                    "phonetics_features": {
                        "total_time": 6.16,
                        "articulation_rate": 3.66211,
                        "silent_pauses": 3,
                        "total_syllables": 15,
                        "phonation_time": 4.096
                    }
                },
                {
                    "id": 48,
                    "act": "Hmm.",
                    "start_time": 440.33,
                    "end_time": 440.47,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2590105601.455,
                        "speech_rate": 4.54545,
                        "articulation_rate": 4.54545,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.22,
                        "articulation_rate": 4.54545,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.22
                    }
                },
                {
                    "id": 49,
                    "act": "Probably when he was little he got lots of attention for doing it and has forever been conditioned.",
                    "start_time": 444.05,
                    "end_time": 448.71,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 276828337.69629,
                        "speech_rate": 6.12245,
                        "articulation_rate": 6.5312,
                        "phonation_time_ratio": 0.93741,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01022
                    },
                    "phonetics_features": {
                        "total_time": 1.47,
                        "articulation_rate": 6.5312,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.378
                    }
                },
                {
                    "id": 51,
                    "act": "'Kay.",
                    "start_time": 488.56,
                    "end_time": 488.91,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2611839842.36041,
                        "speech_rate": 1.6129,
                        "articulation_rate": 2.34742,
                        "phonation_time_ratio": 0.6871,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.194
                    },
                    "phonetics_features": {
                        "total_time": 0.62,
                        "articulation_rate": 2.34742,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.426
                    }
                },
                {
                    "id": 52,
                    "act": "Um, can we just go over that again?",
                    "start_time": 496.02,
                    "end_time": 497.6,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 344075124.6273,
                        "speech_rate": 2.17391,
                        "articulation_rate": 2.26244,
                        "phonation_time_ratio": 0.96087,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.018
                    },
                    "phonetics_features": {
                        "total_time": 0.46,
                        "articulation_rate": 2.26244,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.442
                    }
                },
                {
                    "id": 53,
                    "act": "Uh, so bas at twel",
                    "start_time": 499.16,
                    "end_time": 502.11,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 360062623.82826,
                        "speech_rate": 4.34783,
                        "articulation_rate": 6.67408,
                        "phonation_time_ratio": 0.65145,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.36232,
                        "MPD": 0.08017
                    },
                    "phonetics_features": {
                        "total_time": 2.76,
                        "articulation_rate": 6.67408,
                        "silent_pauses": 1,
                        "total_syllables": 12,
                        "phonation_time": 1.798
                    }
                },
                {
                    "id": 54,
                    "act": "Alright, yeah. Okay.",
                    "start_time": 502.11,
                    "end_time": 504.1,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10135397563.80354,
                        "speech_rate": 1.65289,
                        "articulation_rate": 4.85437,
                        "phonation_time_ratio": 0.3405,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.399
                    },
                    "phonetics_features": {
                        "total_time": 1.21,
                        "articulation_rate": 4.85437,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.412
                    }
                },
                {
                    "id": 55,
                    "act": "So cost like production cost is twelve fifty,",
                    "start_time": 505.28,
                    "end_time": 509.26,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1220805543.84192,
                        "speech_rate": 3.42205,
                        "articulation_rate": 5.02232,
                        "phonation_time_ratio": 0.68137,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.09311
                    },
                    "phonetics_features": {
                        "total_time": 2.63,
                        "articulation_rate": 5.02232,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.792
                    }
                },
                {
                    "id": 56,
                    "act": "but selling price is is that wholesale or retail?",
                    "start_time": 509.26,
                    "end_time": 513.06,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 279728859.03439,
                        "speech_rate": 4.11985,
                        "articulation_rate": 7.80142,
                        "phonation_time_ratio": 0.52809,
                        "mean_length_of_runs": 0.18182,
                        "silent_pauses_rate": 0.74906,
                        "MPD": 0.11455
                    },
                    "phonetics_features": {
                        "total_time": 2.67,
                        "articulation_rate": 7.80142,
                        "silent_pauses": 2,
                        "total_syllables": 11,
                        "phonation_time": 1.41
                    }
                },
                {
                    "id": 57,
                    "act": "Like on the shelf.",
                    "start_time": 513.06,
                    "end_time": 514.0,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2624280841.64822,
                        "speech_rate": 3.23383,
                        "articulation_rate": 4.03727,
                        "phonation_time_ratio": 0.801,
                        "mean_length_of_runs": 0.07692,
                        "silent_pauses_rate": 0.24876,
                        "MPD": 0.06154
                    },
                    "phonetics_features": {
                        "total_time": 4.02,
                        "articulation_rate": 4.03727,
                        "silent_pauses": 1,
                        "total_syllables": 13,
                        "phonation_time": 3.22
                    }
                },
                {
                    "id": 59,
                    "act": "Our sale our sale anyway.",
                    "start_time": 518.31,
                    "end_time": 520.65,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2620751483.5916,
                        "speech_rate": 6.17284,
                        "articulation_rate": 6.28931,
                        "phonation_time_ratio": 0.98148,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.003
                    },
                    "phonetics_features": {
                        "total_time": 1.62,
                        "articulation_rate": 6.28931,
                        "silent_pauses": 0,
                        "total_syllables": 10,
                        "phonation_time": 1.59
                    }
                },
                {
                    "id": 58,
                    "act": "Yeah, okay okay.",
                    "start_time": 520.65,
                    "end_time": 522.57,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 178760917.48527,
                        "speech_rate": 1.44928,
                        "articulation_rate": 1.44928,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.69,
                        "articulation_rate": 1.44928,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.69
                    }
                },
                {
                    "id": 60,
                    "act": "Okay.",
                    "start_time": 526.79,
                    "end_time": 527.05,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2619937618.62776,
                        "speech_rate": 5.6338,
                        "articulation_rate": 5.81395,
                        "phonation_time_ratio": 0.96901,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0055
                    },
                    "phonetics_features": {
                        "total_time": 1.42,
                        "articulation_rate": 5.81395,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.376
                    }
                },
                {
                    "id": 61,
                    "act": "Mm-hmm.",
                    "start_time": 528.9,
                    "end_time": 529.14,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1203777365.49706,
                        "speech_rate": 4.65116,
                        "articulation_rate": 5.43478,
                        "phonation_time_ratio": 0.85581,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.031
                    },
                    "phonetics_features": {
                        "total_time": 0.43,
                        "articulation_rate": 5.43478,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.368
                    }
                },
                {
                    "id": 62,
                    "act": "Alright.",
                    "start_time": 531.58,
                    "end_time": 531.81,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 710626682.80717,
                        "speech_rate": 3.7037,
                        "articulation_rate": 3.81679,
                        "phonation_time_ratio": 0.97037,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.008
                    },
                    "phonetics_features": {
                        "total_time": 0.54,
                        "articulation_rate": 3.81679,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.524
                    }
                },
                {
                    "id": 63,
                    "act": "Yes.",
                    "start_time": 538.77,
                    "end_time": 539.13,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10132922631.86859,
                        "speech_rate": 7.69231,
                        "articulation_rate": 7.69231,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.91,
                        "articulation_rate": 7.69231,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 0.91
                    }
                },
                {
                    "id": 64,
                    "act": "Mm-hmm.",
                    "start_time": 540.69,
                    "end_time": 540.94,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 3.438722331348278e+31,
                        "speech_rate": 1.25,
                        "articulation_rate": 1.3587,
                        "phonation_time_ratio": 0.92,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.064
                    },
                    "phonetics_features": {
                        "total_time": 0.8,
                        "articulation_rate": 1.3587,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.736
                    }
                },
                {
                    "id": 65,
                    "act": "Mm-hmm.",
                    "start_time": 543.86,
                    "end_time": 544.12,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 331633177.32676,
                        "speech_rate": 3.84615,
                        "articulation_rate": 4.31034,
                        "phonation_time_ratio": 0.89231,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.028
                    },
                    "phonetics_features": {
                        "total_time": 0.26,
                        "articulation_rate": 4.31034,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.232
                    }
                },
                {
                    "id": 66,
                    "act": "Well right away I'm wondering if there's um th th uh, like with D_V_D_ players, if there are zones.",
                    "start_time": 548.28,
                    "end_time": 554.28,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 724965106.46867,
                        "speech_rate": 2.60417,
                        "articulation_rate": 3.17864,
                        "phonation_time_ratio": 0.81927,
                        "mean_length_of_runs": 0.1,
                        "silent_pauses_rate": 0.26042,
                        "MPD": 0.0694
                    },
                    "phonetics_features": {
                        "total_time": 3.84,
                        "articulation_rate": 3.17864,
                        "silent_pauses": 1,
                        "total_syllables": 10,
                        "phonation_time": 3.146
                    }
                },
                {
                    "id": 67,
                    "act": "Um f frequencies or something",
                    "start_time": 554.28,
                    "end_time": 557.41,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2624549624.01351,
                        "speech_rate": 2.21239,
                        "articulation_rate": 3.27225,
                        "phonation_time_ratio": 0.67611,
                        "mean_length_of_runs": 0.1,
                        "silent_pauses_rate": 0.22124,
                        "MPD": 0.1464
                    },
                    "phonetics_features": {
                        "total_time": 4.52,
                        "articulation_rate": 3.27225,
                        "silent_pauses": 1,
                        "total_syllables": 10,
                        "phonation_time": 3.056
                    }
                },
                {
                    "id": 68,
                    "act": "um as well as uh characters,",
                    "start_time": 557.41,
                    "end_time": 561.17,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 225995358.95397,
                        "speech_rate": 3.62903,
                        "articulation_rate": 4.64876,
                        "phonation_time_ratio": 0.78065,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.06044
                    },
                    "phonetics_features": {
                        "total_time": 2.48,
                        "articulation_rate": 4.64876,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.936
                    }
                },
                {
                    "id": 69,
                    "act": "um different uh keypad styles and s symbols.",
                    "start_time": 561.17,
                    "end_time": 565.35,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 359931348.88644,
                        "speech_rate": 0.75188,
                        "articulation_rate": 1.63132,
                        "phonation_time_ratio": 0.4609,
                        "mean_length_of_runs": 0.5,
                        "silent_pauses_rate": 0.37594,
                        "MPD": 0.717
                    },
                    "phonetics_features": {
                        "total_time": 2.66,
                        "articulation_rate": 1.63132,
                        "silent_pauses": 1,
                        "total_syllables": 2,
                        "phonation_time": 1.226
                    }
                },
                {
                    "id": 70,
                    "act": "Um.",
                    "start_time": 566.17,
                    "end_time": 566.7,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 189429324.86333,
                        "speech_rate": 4.58453,
                        "articulation_rate": 5.07614,
                        "phonation_time_ratio": 0.90315,
                        "mean_length_of_runs": 0.0625,
                        "silent_pauses_rate": 0.28653,
                        "MPD": 0.02113
                    },
                    "phonetics_features": {
                        "total_time": 3.49,
                        "articulation_rate": 5.07614,
                        "silent_pauses": 1,
                        "total_syllables": 16,
                        "phonation_time": 3.152
                    }
                },
                {
                    "id": 71,
                    "act": "I don't know.",
                    "start_time": 568.46,
                    "end_time": 568.83,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10138228979.93381,
                        "speech_rate": 4.71204,
                        "articulation_rate": 5.89777,
                        "phonation_time_ratio": 0.79895,
                        "mean_length_of_runs": 0.11111,
                        "silent_pauses_rate": 0.52356,
                        "MPD": 0.04267
                    },
                    "phonetics_features": {
                        "total_time": 1.91,
                        "articulation_rate": 5.89777,
                        "silent_pauses": 1,
                        "total_syllables": 9,
                        "phonation_time": 1.526
                    }
                },
                {
                    "id": 72,
                    "act": "Yeah.",
                    "start_time": 571.22,
                    "end_time": 571.58,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2569444444.38889,
                        "speech_rate": 8.33333,
                        "articulation_rate": 20.83333,
                        "phonation_time_ratio": 0.4,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.072
                    },
                    "phonetics_features": {
                        "total_time": 0.12,
                        "articulation_rate": 20.83333,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.048
                    }
                },
                {
                    "id": 73,
                    "act": "Yeah.",
                    "start_time": 580.66,
                    "end_time": 580.94,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 362825340.89685,
                        "speech_rate": 2.51572,
                        "articulation_rate": 2.96296,
                        "phonation_time_ratio": 0.84906,
                        "mean_length_of_runs": 0.125,
                        "silent_pauses_rate": 0.31447,
                        "MPD": 0.06
                    },
                    "phonetics_features": {
                        "total_time": 6.36,
                        "articulation_rate": 2.96296,
                        "silent_pauses": 2,
                        "total_syllables": 16,
                        "phonation_time": 5.4
                    }
                },
                {
                    "id": 75,
                    "act": "Yeah.",
                    "start_time": 582.33,
                    "end_time": 583.5,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2624641361.23947,
                        "speech_rate": 3.17797,
                        "articulation_rate": 4.77099,
                        "phonation_time_ratio": 0.6661,
                        "mean_length_of_runs": 0.13333,
                        "silent_pauses_rate": 0.42373,
                        "MPD": 0.10507
                    },
                    "phonetics_features": {
                        "total_time": 4.72,
                        "articulation_rate": 4.77099,
                        "silent_pauses": 2,
                        "total_syllables": 15,
                        "phonation_time": 3.144
                    }
                },
                {
                    "id": 76,
                    "act": "And then a and then al the other thing international is on top of the price.",
                    "start_time": 583.5,
                    "end_time": 587.78,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2619441685.28418,
                        "speech_rate": 5.30303,
                        "articulation_rate": 5.30303,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.32,
                        "articulation_rate": 5.30303,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.32
                    }
                },
                {
                    "id": 77,
                    "act": "I'm thinking the price might might appeal to a certain market in one region, whereas in another it'll be different, so",
                    "start_time": 587.78,
                    "end_time": 596.78,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 716311473.08727,
                        "speech_rate": 7.14286,
                        "articulation_rate": 7.14286,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.84,
                        "articulation_rate": 7.14286,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 0.84
                    }
                },
                {
                    "id": 74,
                    "act": "Just a chara just a characteristic of the",
                    "start_time": 598.26,
                    "end_time": 600.01,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 714894239.52832,
                        "speech_rate": 1.35135,
                        "articulation_rate": 1.37363,
                        "phonation_time_ratio": 0.98378,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.012
                    },
                    "phonetics_features": {
                        "total_time": 0.74,
                        "articulation_rate": 1.37363,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.728
                    }
                },
                {
                    "id": 79,
                    "act": "Just",
                    "start_time": 601.09,
                    "end_time": 601.65,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 227998157.79047,
                        "speech_rate": 4.33071,
                        "articulation_rate": 5.35019,
                        "phonation_time_ratio": 0.80945,
                        "mean_length_of_runs": 0.04545,
                        "silent_pauses_rate": 0.19685,
                        "MPD": 0.044
                    },
                    "phonetics_features": {
                        "total_time": 5.08,
                        "articulation_rate": 5.35019,
                        "silent_pauses": 1,
                        "total_syllables": 22,
                        "phonation_time": 4.112
                    }
                },
                {
                    "id": 80,
                    "act": "Or just like, basic product podi positioning,",
                    "start_time": 602.87,
                    "end_time": 606.29,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1203777365.49706,
                        "speech_rate": 2.32558,
                        "articulation_rate": 2.38095,
                        "phonation_time_ratio": 0.97674,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01
                    },
                    "phonetics_features": {
                        "total_time": 0.43,
                        "articulation_rate": 2.38095,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.42
                    }
                },
                {
                    "id": 81,
                    "act": "the twenty five Euro remote control might be a big hit in London,",
                    "start_time": 606.29,
                    "end_time": 611.16,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 719787594.84286,
                        "speech_rate": 1.6129,
                        "articulation_rate": 3.93701,
                        "phonation_time_ratio": 0.40968,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.366
                    },
                    "phonetics_features": {
                        "total_time": 1.24,
                        "articulation_rate": 3.93701,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.508
                    }
                },
                {
                    "id": 82,
                    "act": "might not be such a big hit in Greece,",
                    "start_time": 611.16,
                    "end_time": 615.2,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2599871226.455,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.4965,
                        "phonation_time_ratio": 0.89375,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.034
                    },
                    "phonetics_features": {
                        "total_time": 0.32,
                        "articulation_rate": 3.4965,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.286
                    }
                },
                {
                    "id": 84,
                    "act": "who knows,",
                    "start_time": 615.2,
                    "end_time": 615.98,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 8.596805828370695e+30,
                        "speech_rate": 4.375,
                        "articulation_rate": 4.375,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.6,
                        "articulation_rate": 4.375,
                        "silent_pauses": 0,
                        "total_syllables": 7,
                        "phonation_time": 1.6
                    }
                },
                {
                    "id": 85,
                    "act": "something like that, yeah.",
                    "start_time": 615.98,
                    "end_time": 616.94,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10135980280.43054,
                        "speech_rate": 3.05344,
                        "articulation_rate": 4.914,
                        "phonation_time_ratio": 0.62137,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.76336,
                        "MPD": 0.124
                    },
                    "phonetics_features": {
                        "total_time": 1.31,
                        "articulation_rate": 4.914,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 0.814
                    }
                },
                {
                    "id": 86,
                    "act": "Yep.",
                    "start_time": 620.48,
                    "end_time": 620.64,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 485791697.65403,
                        "speech_rate": 1.6,
                        "articulation_rate": 1.98413,
                        "phonation_time_ratio": 0.8064,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.121
                    },
                    "phonetics_features": {
                        "total_time": 1.25,
                        "articulation_rate": 1.98413,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 1.008
                    }
                },
                {
                    "id": 87,
                    "act": "Right away I'm making some kind of assumptions about what what information we're given here,",
                    "start_time": 655.45,
                    "end_time": 660.71,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 491041316.59532,
                        "speech_rate": 1.7284,
                        "articulation_rate": 3.21396,
                        "phonation_time_ratio": 0.53778,
                        "mean_length_of_runs": 0.42857,
                        "silent_pauses_rate": 0.74074,
                        "MPD": 0.26743
                    },
                    "phonetics_features": {
                        "total_time": 4.05,
                        "articulation_rate": 3.21396,
                        "silent_pauses": 3,
                        "total_syllables": 7,
                        "phonation_time": 2.178
                    }
                },
                {
                    "id": 88,
                    "act": "thinking, 'kay trendy probably means something other than just basic,",
                    "start_time": 660.71,
                    "end_time": 665.64,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 162295692.93626,
                        "speech_rate": 2.66667,
                        "articulation_rate": 4.19874,
                        "phonation_time_ratio": 0.63511,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.22222,
                        "MPD": 0.13683
                    },
                    "phonetics_features": {
                        "total_time": 4.5,
                        "articulation_rate": 4.19874,
                        "silent_pauses": 1,
                        "total_syllables": 12,
                        "phonation_time": 2.858
                    }
                },
                {
                    "id": 89,
                    "act": "something other than just standard. Um",
                    "start_time": 665.64,
                    "end_time": 669.16,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2625511688.20435,
                        "speech_rate": 3.68098,
                        "articulation_rate": 5.00835,
                        "phonation_time_ratio": 0.73497,
                        "mean_length_of_runs": 0.04167,
                        "silent_pauses_rate": 0.15337,
                        "MPD": 0.072
                    },
                    "phonetics_features": {
                        "total_time": 6.52,
                        "articulation_rate": 5.00835,
                        "silent_pauses": 1,
                        "total_syllables": 24,
                        "phonation_time": 4.792
                    }
                },
                {
                    "id": 90,
                    "act": "so I'm wondering right away,",
                    "start_time": 670.31,
                    "end_time": 672.15,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 725945867.38785,
                        "speech_rate": 2.08333,
                        "articulation_rate": 3.94417,
                        "phonation_time_ratio": 0.52821,
                        "mean_length_of_runs": 0.30769,
                        "silent_pauses_rate": 0.64103,
                        "MPD": 0.22646
                    },
                    "phonetics_features": {
                        "total_time": 6.24,
                        "articulation_rate": 3.94417,
                        "silent_pauses": 4,
                        "total_syllables": 13,
                        "phonation_time": 3.296
                    }
                },
                {
                    "id": 93,
                    "act": "is selling twenty five Euros, is that sort of the",
                    "start_time": 672.15,
                    "end_time": 674.38,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 264232667.11403,
                        "speech_rate": 2.12766,
                        "articulation_rate": 2.60417,
                        "phonation_time_ratio": 0.81702,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.086
                    },
                    "phonetics_features": {
                        "total_time": 0.47,
                        "articulation_rate": 2.60417,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.384
                    }
                },
                {
                    "id": 92,
                    "act": "thi is this gonna to be like the premium product kinda thing or",
                    "start_time": 674.38,
                    "end_time": 677.53,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 191883787.28067,
                        "speech_rate": 3.33761,
                        "articulation_rate": 3.75289,
                        "phonation_time_ratio": 0.88935,
                        "mean_length_of_runs": 0.03846,
                        "silent_pauses_rate": 0.12837,
                        "MPD": 0.03315
                    },
                    "phonetics_features": {
                        "total_time": 7.79,
                        "articulation_rate": 3.75289,
                        "silent_pauses": 1,
                        "total_syllables": 26,
                        "phonation_time": 6.928
                    }
                },
                {
                    "id": 94,
                    "act": "Uh-huh.",
                    "start_time": 680.52,
                    "end_time": 680.81,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 480996408.21593,
                        "speech_rate": 5.33333,
                        "articulation_rate": 5.33333,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.75,
                        "articulation_rate": 5.33333,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 0.75
                    }
                },
                {
                    "id": 95,
                    "act": "Mm-hmm.",
                    "start_time": 687.72,
                    "end_time": 688.11,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2620751483.5916,
                        "speech_rate": 2.46914,
                        "articulation_rate": 4.87805,
                        "phonation_time_ratio": 0.50617,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.61728,
                        "MPD": 0.2
                    },
                    "phonetics_features": {
                        "total_time": 1.62,
                        "articulation_rate": 4.87805,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 0.82
                    }
                },
                {
                    "id": 96,
                    "act": "Yep.",
                    "start_time": 689.77,
                    "end_time": 689.98,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 717443206.90936,
                        "speech_rate": 5.31915,
                        "articulation_rate": 6.00962,
                        "phonation_time_ratio": 0.88511,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0216
                    },
                    "phonetics_features": {
                        "total_time": 0.94,
                        "articulation_rate": 6.00962,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 0.832
                    }
                },
                {
                    "id": 97,
                    "act": "Yeah,",
                    "start_time": 691.16,
                    "end_time": 691.33,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10138228979.93381,
                        "speech_rate": 7.32984,
                        "articulation_rate": 7.32984,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.91,
                        "articulation_rate": 7.32984,
                        "silent_pauses": 0,
                        "total_syllables": 14,
                        "phonation_time": 1.91
                    }
                },
                {
                    "id": 98,
                    "act": "I'd say so,",
                    "start_time": 691.33,
                    "end_time": 691.82,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2625584330.77624,
                        "speech_rate": 2.78422,
                        "articulation_rate": 4.24628,
                        "phonation_time_ratio": 0.65568,
                        "mean_length_of_runs": 0.125,
                        "silent_pauses_rate": 0.34803,
                        "MPD": 0.12367
                    },
                    "phonetics_features": {
                        "total_time": 8.62,
                        "articulation_rate": 4.24628,
                        "silent_pauses": 3,
                        "total_syllables": 24,
                        "phonation_time": 5.652
                    }
                },
                {
                    "id": 99,
                    "act": "yeah.",
                    "start_time": 691.82,
                    "end_time": 691.97,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 184193840.5159,
                        "speech_rate": 3.36134,
                        "articulation_rate": 6.06061,
                        "phonation_time_ratio": 0.55462,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.1325
                    },
                    "phonetics_features": {
                        "total_time": 1.19,
                        "articulation_rate": 6.06061,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 0.66
                    }
                },
                {
                    "id": 100,
                    "act": "No.",
                    "start_time": 696.23,
                    "end_time": 696.58,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1222806393.75305,
                        "speech_rate": 5.06108,
                        "articulation_rate": 5.64202,
                        "phonation_time_ratio": 0.89703,
                        "mean_length_of_runs": 0.03448,
                        "silent_pauses_rate": 0.17452,
                        "MPD": 0.02034
                    },
                    "phonetics_features": {
                        "total_time": 5.73,
                        "articulation_rate": 5.64202,
                        "silent_pauses": 1,
                        "total_syllables": 29,
                        "phonation_time": 5.14
                    }
                },
                {
                    "id": 102,
                    "act": "Yeah,",
                    "start_time": 697.98,
                    "end_time": 699.19,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 220246277.13798,
                        "speech_rate": 1.02041,
                        "articulation_rate": 1.96078,
                        "phonation_time_ratio": 0.52041,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.47
                    },
                    "phonetics_features": {
                        "total_time": 0.98,
                        "articulation_rate": 1.96078,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.51
                    }
                },
                {
                    "id": 103,
                    "act": "yeah.",
                    "start_time": 699.19,
                    "end_time": 702.01,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 226145590.31086,
                        "speech_rate": 4.65116,
                        "articulation_rate": 5.94059,
                        "phonation_time_ratio": 0.78295,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.3876,
                        "MPD": 0.04667
                    },
                    "phonetics_features": {
                        "total_time": 2.58,
                        "articulation_rate": 5.94059,
                        "silent_pauses": 1,
                        "total_syllables": 12,
                        "phonation_time": 2.02
                    }
                },
                {
                    "id": 104,
                    "act": "Mm-hmm.",
                    "start_time": 704.03,
                    "end_time": 704.41,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 275212772.88028,
                        "speech_rate": 1.7094,
                        "articulation_rate": 2.77008,
                        "phonation_time_ratio": 0.61709,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.224
                    },
                    "phonetics_features": {
                        "total_time": 1.17,
                        "articulation_rate": 2.77008,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.722
                    }
                },
                {
                    "id": 106,
                    "act": "Do we have any other background information on like how that compares to other",
                    "start_time": 722.77,
                    "end_time": 727.01,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1209856877.58405,
                        "speech_rate": 7.93651,
                        "articulation_rate": 8.27815,
                        "phonation_time_ratio": 0.95873,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0052
                    },
                    "phonetics_features": {
                        "total_time": 0.63,
                        "articulation_rate": 8.27815,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 0.604
                    }
                },
                {
                    "id": 108,
                    "act": "other",
                    "start_time": 728.35,
                    "end_time": 728.78,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 216270066.51812,
                        "speech_rate": 2.94118,
                        "articulation_rate": 2.94118,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.68,
                        "articulation_rate": 2.94118,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.68
                    }
                },
                {
                    "id": 109,
                    "act": "Yeah.",
                    "start_time": 730.73,
                    "end_time": 731.07,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 359096851.88736,
                        "speech_rate": 2.31481,
                        "articulation_rate": 3.84615,
                        "phonation_time_ratio": 0.60185,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.172
                    },
                    "phonetics_features": {
                        "total_time": 2.16,
                        "articulation_rate": 3.84615,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.3
                    }
                },
                {
                    "id": 107,
                    "act": "Mm-hmm.",
                    "start_time": 734.73,
                    "end_time": 735.08,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 358386560.00761,
                        "speech_rate": 1.6129,
                        "articulation_rate": 4.06504,
                        "phonation_time_ratio": 0.39677,
                        "mean_length_of_runs": 0.33333,
                        "silent_pauses_rate": 0.53763,
                        "MPD": 0.374
                    },
                    "phonetics_features": {
                        "total_time": 1.86,
                        "articulation_rate": 4.06504,
                        "silent_pauses": 1,
                        "total_syllables": 3,
                        "phonation_time": 0.738
                    }
                },
                {
                    "id": 111,
                    "act": "Yeah, interesting thing about discussing um production of a remote control for me is that l",
                    "start_time": 753.67,
                    "end_time": 759.58,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 146361111.08889,
                        "speech_rate": 4.0,
                        "articulation_rate": 6.57895,
                        "phonation_time_ratio": 0.608,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.098
                    },
                    "phonetics_features": {
                        "total_time": 0.5,
                        "articulation_rate": 6.57895,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.304
                    }
                },
                {
                    "id": 112,
                    "act": "as you point out,",
                    "start_time": 759.58,
                    "end_time": 760.59,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 152742205.20839,
                        "speech_rate": 1.25,
                        "articulation_rate": 2.01613,
                        "phonation_time_ratio": 0.62,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.304
                    },
                    "phonetics_features": {
                        "total_time": 0.8,
                        "articulation_rate": 2.01613,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.496
                    }
                },
                {
                    "id": 113,
                    "act": "I just don't think of remote controls as somethin something people consciously assess in their purchasing habits.",
                    "start_time": 760.59,
                    "end_time": 767.74,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 279273271.94442,
                        "speech_rate": 5.06329,
                        "articulation_rate": 6.14754,
                        "phonation_time_ratio": 0.82363,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.03483
                    },
                    "phonetics_features": {
                        "total_time": 2.37,
                        "articulation_rate": 6.14754,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 1.952
                    }
                },
                {
                    "id": 114,
                    "act": "It's just like getting shoelaces with shoes or something.",
                    "start_time": 767.74,
                    "end_time": 772.49,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10139707124.77506,
                        "speech_rate": 6.64207,
                        "articulation_rate": 6.98758,
                        "phonation_time_ratio": 0.95055,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.00744
                    },
                    "phonetics_features": {
                        "total_time": 2.71,
                        "articulation_rate": 6.98758,
                        "silent_pauses": 0,
                        "total_syllables": 18,
                        "phonation_time": 2.576
                    }
                },
                {
                    "id": 115,
                    "act": "It just comes along.",
                    "start_time": 772.49,
                    "end_time": 773.41,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2622992839.77269,
                        "speech_rate": 0.76336,
                        "articulation_rate": 1.95312,
                        "phonation_time_ratio": 0.39084,
                        "mean_length_of_runs": 1.0,
                        "silent_pauses_rate": 0.76336,
                        "MPD": 0.798
                    },
                    "phonetics_features": {
                        "total_time": 2.62,
                        "articulation_rate": 1.95312,
                        "silent_pauses": 2,
                        "total_syllables": 2,
                        "phonation_time": 1.024
                    }
                },
                {
                    "id": 116,
                    "act": "Do you know what I mean?",
                    "start_time": 776.12,
                    "end_time": 777.67,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 487232251.84155,
                        "speech_rate": 3.87097,
                        "articulation_rate": 10.71429,
                        "phonation_time_ratio": 0.36129,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.165
                    },
                    "phonetics_features": {
                        "total_time": 1.55,
                        "articulation_rate": 10.71429,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 0.56
                    }
                },
                {
                    "id": 117,
                    "act": "Like so sort of like how do you",
                    "start_time": 777.67,
                    "end_time": 779.25,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 352642968.42274,
                        "speech_rate": 2.32558,
                        "articulation_rate": 7.35294,
                        "phonation_time_ratio": 0.31628,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.294
                    },
                    "phonetics_features": {
                        "total_time": 0.86,
                        "articulation_rate": 7.35294,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.272
                    }
                },
                {
                    "id": 118,
                    "act": "I I mean one one way of looking at it would be, well the people producing television sets, maybe they have to buy remote controls.",
                    "start_time": 779.25,
                    "end_time": 786.49,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 723818614.80639,
                        "speech_rate": 4.16667,
                        "articulation_rate": 4.16667,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.64,
                        "articulation_rate": 4.16667,
                        "silent_pauses": 0,
                        "total_syllables": 11,
                        "phonation_time": 2.64
                    }
                },
                {
                    "id": 119,
                    "act": "Or another way is maybe people who have T_V_ sets are really fed up with their remote control and they really want a better one or something.",
                    "start_time": 786.49,
                    "end_time": 793.63,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 161215011.74893,
                        "speech_rate": 4.0,
                        "articulation_rate": 5.20382,
                        "phonation_time_ratio": 0.76867,
                        "mean_length_of_runs": 0.08333,
                        "silent_pauses_rate": 0.33333,
                        "MPD": 0.05783
                    },
                    "phonetics_features": {
                        "total_time": 3.0,
                        "articulation_rate": 5.20382,
                        "silent_pauses": 1,
                        "total_syllables": 12,
                        "phonation_time": 2.306
                    }
                },
                {
                    "id": 120,
                    "act": "But",
                    "start_time": 794.53,
                    "end_time": 794.97,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 721248421.10266,
                        "speech_rate": 3.24675,
                        "articulation_rate": 3.24675,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.54,
                        "articulation_rate": 3.24675,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.54
                    }
                },
                {
                    "id": 121,
                    "act": "Right. Right.",
                    "start_time": 799.88,
                    "end_time": 801.75,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 484395553.9822,
                        "speech_rate": 2.85714,
                        "articulation_rate": 5.51471,
                        "phonation_time_ratio": 0.5181,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.16867
                    },
                    "phonetics_features": {
                        "total_time": 1.05,
                        "articulation_rate": 5.51471,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.544
                    }
                },
                {
                    "id": 123,
                    "act": "Okay so",
                    "start_time": 801.75,
                    "end_time": 802.2,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 142361111.08889,
                        "speech_rate": 5.0,
                        "articulation_rate": 5.0,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.4,
                        "articulation_rate": 5.0,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.4
                    }
                },
                {
                    "id": 122,
                    "act": "Right,",
                    "start_time": 804.47,
                    "end_time": 804.72,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1215283790.69905,
                        "speech_rate": 4.85437,
                        "articulation_rate": 5.03018,
                        "phonation_time_ratio": 0.96505,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0072
                    },
                    "phonetics_features": {
                        "total_time": 1.03,
                        "articulation_rate": 5.03018,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 0.994
                    }
                },
                {
                    "id": 125,
                    "act": "so in function one of the priorities might be to combine as many uses",
                    "start_time": 804.72,
                    "end_time": 810.39,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2609238385.53107,
                        "speech_rate": 1.92308,
                        "articulation_rate": 2.0,
                        "phonation_time_ratio": 0.96154,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.02
                    },
                    "phonetics_features": {
                        "total_time": 0.52,
                        "articulation_rate": 2.0,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.5
                    }
                },
                {
                    "id": 124,
                    "act": "I think so.",
                    "start_time": 814.98,
                    "end_time": 815.81,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 227032168.37102,
                        "speech_rate": 2.36686,
                        "articulation_rate": 3.65297,
                        "phonation_time_ratio": 0.64793,
                        "mean_length_of_runs": 0.125,
                        "silent_pauses_rate": 0.29586,
                        "MPD": 0.14875
                    },
                    "phonetics_features": {
                        "total_time": 3.38,
                        "articulation_rate": 3.65297,
                        "silent_pauses": 1,
                        "total_syllables": 8,
                        "phonation_time": 2.19
                    }
                },
                {
                    "id": 127,
                    "act": "Yeah, yeah.",
                    "start_time": 815.81,
                    "end_time": 817.04,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10125519707.36417,
                        "speech_rate": 3.92157,
                        "articulation_rate": 4.06504,
                        "phonation_time_ratio": 0.96471,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.009
                    },
                    "phonetics_features": {
                        "total_time": 0.51,
                        "articulation_rate": 4.06504,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.492
                    }
                },
                {
                    "id": 126,
                    "act": "Yeah.",
                    "start_time": 818.45,
                    "end_time": 818.67,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 211134785.14483,
                        "speech_rate": 2.08333,
                        "articulation_rate": 2.15517,
                        "phonation_time_ratio": 0.96667,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.016
                    },
                    "phonetics_features": {
                        "total_time": 0.48,
                        "articulation_rate": 2.15517,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.464
                    }
                },
                {
                    "id": 128,
                    "act": "Well like um,",
                    "start_time": 819.79,
                    "end_time": 821.05,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 279980592.7542,
                        "speech_rate": 4.18118,
                        "articulation_rate": 4.4843,
                        "phonation_time_ratio": 0.9324,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01617
                    },
                    "phonetics_features": {
                        "total_time": 2.87,
                        "articulation_rate": 4.4843,
                        "silent_pauses": 0,
                        "total_syllables": 12,
                        "phonation_time": 2.676
                    }
                },
                {
                    "id": 129,
                    "act": "maybe what we could use is a sort of like a example of a successful other piece technology is palm palm pilots.",
                    "start_time": 821.05,
                    "end_time": 828.28,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1222711687.52215,
                        "speech_rate": 3.8674,
                        "articulation_rate": 5.53506,
                        "phonation_time_ratio": 0.69871,
                        "mean_length_of_runs": 0.09524,
                        "silent_pauses_rate": 0.36832,
                        "MPD": 0.0779
                    },
                    "phonetics_features": {
                        "total_time": 5.43,
                        "articulation_rate": 5.53506,
                        "silent_pauses": 2,
                        "total_syllables": 21,
                        "phonation_time": 3.794
                    }
                },
                {
                    "id": 130,
                    "act": "They're gone from being just like little sort of scribble boards to cameras, M_P_ three players, telephones,",
                    "start_time": 828.28,
                    "end_time": 834.09,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2613768854.70918,
                        "speech_rate": 2.77778,
                        "articulation_rate": 5.71429,
                        "phonation_time_ratio": 0.48611,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.185
                    },
                    "phonetics_features": {
                        "total_time": 0.72,
                        "articulation_rate": 5.71429,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.35
                    }
                },
                {
                    "id": 131,
                    "act": "everything, agenda.",
                    "start_time": 835.22,
                    "end_time": 836.31,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1189186300.19541,
                        "speech_rate": 8.69565,
                        "articulation_rate": 10.86957,
                        "phonation_time_ratio": 0.8,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.023
                    },
                    "phonetics_features": {
                        "total_time": 0.23,
                        "articulation_rate": 10.86957,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.184
                    }
                },
                {
                    "id": 132,
                    "act": "So, like, I wonder if we might add something new to the to the remote control market,",
                    "start_time": 836.31,
                    "end_time": 840.68,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 357774678.66821,
                        "speech_rate": 3.61446,
                        "articulation_rate": 5.90551,
                        "phonation_time_ratio": 0.61205,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.10733
                    },
                    "phonetics_features": {
                        "total_time": 1.66,
                        "articulation_rate": 5.90551,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.016
                    }
                },
                {
                    "id": 133,
                    "act": "such as the lighting in your house, or um",
                    "start_time": 840.68,
                    "end_time": 844.06,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 224767224.74018,
                        "speech_rate": 4.25532,
                        "articulation_rate": 5.68182,
                        "phonation_time_ratio": 0.74894,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.059
                    },
                    "phonetics_features": {
                        "total_time": 1.88,
                        "articulation_rate": 5.68182,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.408
                    }
                },
                {
                    "id": 134,
                    "act": "Yeah,",
                    "start_time": 849.08,
                    "end_time": 849.78,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 151179705.20839,
                        "speech_rate": 1.42857,
                        "articulation_rate": 2.65957,
                        "phonation_time_ratio": 0.53714,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.324
                    },
                    "phonetics_features": {
                        "total_time": 0.7,
                        "articulation_rate": 2.65957,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.376
                    }
                },
                {
                    "id": 135,
                    "act": "yeah.",
                    "start_time": 849.78,
                    "end_time": 851.06,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 721950518.22272,
                        "speech_rate": 2.29885,
                        "articulation_rate": 3.52113,
                        "phonation_time_ratio": 0.65287,
                        "mean_length_of_runs": 0.25,
                        "silent_pauses_rate": 0.57471,
                        "MPD": 0.151
                    },
                    "phonetics_features": {
                        "total_time": 1.74,
                        "articulation_rate": 3.52113,
                        "silent_pauses": 1,
                        "total_syllables": 4,
                        "phonation_time": 1.136
                    }
                },
                {
                    "id": 136,
                    "act": "An",
                    "start_time": 851.06,
                    "end_time": 851.42,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 276365567.55265,
                        "speech_rate": 6.56934,
                        "articulation_rate": 6.56934,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.37,
                        "articulation_rate": 6.56934,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.37
                    }
                },
                {
                    "id": 138,
                    "act": "Yeah.",
                    "start_time": 852.79,
                    "end_time": 853.54,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 188964818.64498,
                        "speech_rate": 5.35117,
                        "articulation_rate": 6.28931,
                        "phonation_time_ratio": 0.85084,
                        "mean_length_of_runs": 0.0625,
                        "silent_pauses_rate": 0.33445,
                        "MPD": 0.02788
                    },
                    "phonetics_features": {
                        "total_time": 2.99,
                        "articulation_rate": 6.28931,
                        "silent_pauses": 1,
                        "total_syllables": 16,
                        "phonation_time": 2.544
                    }
                },
                {
                    "id": 139,
                    "act": "Like, p personally for me, at home I've I've combined the um the audio video of my television set and my D_V_D_ player and my C_D_ player.",
                    "start_time": 853.54,
                    "end_time": 862.9,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 280093959.87316,
                        "speech_rate": 1.3468,
                        "articulation_rate": 2.75862,
                        "phonation_time_ratio": 0.48822,
                        "mean_length_of_runs": 0.5,
                        "silent_pauses_rate": 0.6734,
                        "MPD": 0.38
                    },
                    "phonetics_features": {
                        "total_time": 2.97,
                        "articulation_rate": 2.75862,
                        "silent_pauses": 2,
                        "total_syllables": 4,
                        "phonation_time": 1.45
                    }
                },
                {
                    "id": 140,
                    "act": "So they w all work actually function together",
                    "start_time": 862.9,
                    "end_time": 864.62,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 225832767.90012,
                        "speech_rate": 2.94118,
                        "articulation_rate": 5.20059,
                        "phonation_time_ratio": 0.56555,
                        "mean_length_of_runs": 0.14286,
                        "silent_pauses_rate": 0.42017,
                        "MPD": 0.14771
                    },
                    "phonetics_features": {
                        "total_time": 2.38,
                        "articulation_rate": 5.20059,
                        "silent_pauses": 1,
                        "total_syllables": 7,
                        "phonation_time": 1.346
                    }
                },
                {
                    "id": 141,
                    "act": "but I have different remote controls for each of them.",
                    "start_time": 864.62,
                    "end_time": 866.91,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 485151697.65403,
                        "speech_rate": 1.73913,
                        "articulation_rate": 4.329,
                        "phonation_time_ratio": 0.40174,
                        "mean_length_of_runs": 0.5,
                        "silent_pauses_rate": 0.86957,
                        "MPD": 0.344
                    },
                    "phonetics_features": {
                        "total_time": 1.15,
                        "articulation_rate": 4.329,
                        "silent_pauses": 1,
                        "total_syllables": 2,
                        "phonation_time": 0.462
                    }
                },
                {
                    "id": 142,
                    "act": "So it's sort of ironic that that then they're in there",
                    "start_time": 866.91,
                    "end_time": 870.27,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 273625102.55145,
                        "speech_rate": 3.24074,
                        "articulation_rate": 4.14038,
                        "phonation_time_ratio": 0.78272,
                        "mean_length_of_runs": 0.09524,
                        "silent_pauses_rate": 0.30864,
                        "MPD": 0.06705
                    },
                    "phonetics_features": {
                        "total_time": 6.48,
                        "articulation_rate": 4.14038,
                        "silent_pauses": 2,
                        "total_syllables": 21,
                        "phonation_time": 5.072
                    }
                },
                {
                    "id": 137,
                    "act": "um",
                    "start_time": 872.03,
                    "end_time": 872.56,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 227919085.78528,
                        "speech_rate": 3.48361,
                        "articulation_rate": 4.63215,
                        "phonation_time_ratio": 0.75205,
                        "mean_length_of_runs": 0.11765,
                        "silent_pauses_rate": 0.40984,
                        "MPD": 0.07118
                    },
                    "phonetics_features": {
                        "total_time": 4.88,
                        "articulation_rate": 4.63215,
                        "silent_pauses": 2,
                        "total_syllables": 17,
                        "phonation_time": 3.67
                    }
                },
                {
                    "id": 143,
                    "act": "you know, the sound and everything it's just one system.",
                    "start_time": 874.02,
                    "end_time": 876.45,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 151157621.07383,
                        "speech_rate": 5.26316,
                        "articulation_rate": 8.92857,
                        "phonation_time_ratio": 0.58947,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.078
                    },
                    "phonetics_features": {
                        "total_time": 0.19,
                        "articulation_rate": 8.92857,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.112
                    }
                },
                {
                    "id": 144,
                    "act": "But each one's got its own little",
                    "start_time": 876.45,
                    "end_time": 877.77,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 176660518.41617,
                        "speech_rate": 1.69492,
                        "articulation_rate": 2.5,
                        "phonation_time_ratio": 0.67797,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.19
                    },
                    "phonetics_features": {
                        "total_time": 0.59,
                        "articulation_rate": 2.5,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.4
                    }
                },
                {
                    "id": 145,
                    "act": "part.",
                    "start_time": 878.95,
                    "end_time": 879.22,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 269538204.83242,
                        "speech_rate": 5.97015,
                        "articulation_rate": 5.97015,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.67,
                        "articulation_rate": 5.97015,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 0.67
                    }
                },
                {
                    "id": 146,
                    "act": "Mm.",
                    "start_time": 904.75,
                    "end_time": 905.26,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1216066937.37851,
                        "speech_rate": 5.30973,
                        "articulation_rate": 5.30973,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.13,
                        "articulation_rate": 5.30973,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.13
                    }
                },
                {
                    "id": 147,
                    "act": "Mm. Mm.",
                    "start_time": 907.47,
                    "end_time": 909.26,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 339349226.72182,
                        "speech_rate": 5.55556,
                        "articulation_rate": 5.55556,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.36,
                        "articulation_rate": 5.55556,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.36
                    }
                },
                {
                    "id": 148,
                    "act": "Mm-hmm. Mm-hmm.",
                    "start_time": 911.1,
                    "end_time": 912.1,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 360405810.13576,
                        "speech_rate": 3.92157,
                        "articulation_rate": 5.84795,
                        "phonation_time_ratio": 0.67059,
                        "mean_length_of_runs": 0.16667,
                        "silent_pauses_rate": 0.65359,
                        "MPD": 0.084
                    },
                    "phonetics_features": {
                        "total_time": 3.06,
                        "articulation_rate": 5.84795,
                        "silent_pauses": 2,
                        "total_syllables": 12,
                        "phonation_time": 2.052
                    }
                },
                {
                    "id": 149,
                    "act": "Yeah.",
                    "start_time": 913.22,
                    "end_time": 913.58,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 347263900.15281,
                        "speech_rate": 3.57143,
                        "articulation_rate": 4.03226,
                        "phonation_time_ratio": 0.88571,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.032
                    },
                    "phonetics_features": {
                        "total_time": 0.56,
                        "articulation_rate": 4.03226,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.496
                    }
                },
                {
                    "id": 150,
                    "act": "Yeah.",
                    "start_time": 914.77,
                    "end_time": 915.13,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1170282708.48652,
                        "speech_rate": 7.69231,
                        "articulation_rate": 7.69231,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.13,
                        "articulation_rate": 7.69231,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.13
                    }
                },
                {
                    "id": 156,
                    "act": "That's just really good id",
                    "start_time": 916.12,
                    "end_time": 916.97,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 287671460.59994,
                        "speech_rate": 3.79507,
                        "articulation_rate": 5.81395,
                        "phonation_time_ratio": 0.65275,
                        "mean_length_of_runs": 0.05,
                        "silent_pauses_rate": 0.18975,
                        "MPD": 0.0915
                    },
                    "phonetics_features": {
                        "total_time": 5.27,
                        "articulation_rate": 5.81395,
                        "silent_pauses": 1,
                        "total_syllables": 20,
                        "phonation_time": 3.44
                    }
                },
                {
                    "id": 157,
                    "act": "Yep.",
                    "start_time": 919.28,
                    "end_time": 919.69,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 707197327.53282,
                        "speech_rate": 2.27273,
                        "articulation_rate": 2.27273,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.44,
                        "articulation_rate": 2.27273,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.44
                    }
                },
                {
                    "id": 154,
                    "act": "Uh,",
                    "start_time": 924.35,
                    "end_time": 925.74,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2609238385.53107,
                        "speech_rate": 1.92308,
                        "articulation_rate": 2.29358,
                        "phonation_time_ratio": 0.83846,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.084
                    },
                    "phonetics_features": {
                        "total_time": 0.52,
                        "articulation_rate": 2.29358,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.436
                    }
                },
                {
                    "id": 155,
                    "act": "sure.",
                    "start_time": 925.74,
                    "end_time": 927.64,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 499160300.87936,
                        "speech_rate": 5.18519,
                        "articulation_rate": 5.83333,
                        "phonation_time_ratio": 0.88889,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.02143
                    },
                    "phonetics_features": {
                        "total_time": 4.05,
                        "articulation_rate": 5.83333,
                        "silent_pauses": 0,
                        "total_syllables": 21,
                        "phonation_time": 3.6
                    }
                },
                {
                    "id": 151,
                    "act": "I remember when the first remote control my my family had was on a cable.",
                    "start_time": 927.64,
                    "end_time": 932.01,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 721620223.60414,
                        "speech_rate": 3.04878,
                        "articulation_rate": 5.61798,
                        "phonation_time_ratio": 0.54268,
                        "mean_length_of_runs": 0.2,
                        "silent_pauses_rate": 0.60976,
                        "MPD": 0.15
                    },
                    "phonetics_features": {
                        "total_time": 1.64,
                        "articulation_rate": 5.61798,
                        "silent_pauses": 1,
                        "total_syllables": 5,
                        "phonation_time": 0.89
                    }
                },
                {
                    "id": 152,
                    "act": "Actually had a cable between it and the T_V_",
                    "start_time": 932.01,
                    "end_time": 933.48,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 276365567.55265,
                        "speech_rate": 6.56934,
                        "articulation_rate": 6.64697,
                        "phonation_time_ratio": 0.98832,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.00178
                    },
                    "phonetics_features": {
                        "total_time": 1.37,
                        "articulation_rate": 6.64697,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.354
                    }
                },
                {
                    "id": 153,
                    "act": "and big like buttons that sort of like, like on a blender or something.",
                    "start_time": 933.48,
                    "end_time": 937.36,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 355361197.22994,
                        "speech_rate": 2.58621,
                        "articulation_rate": 3.64964,
                        "phonation_time_ratio": 0.70862,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.11267
                    },
                    "phonetics_features": {
                        "total_time": 1.16,
                        "articulation_rate": 3.64964,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.822
                    }
                },
                {
                    "id": 159,
                    "act": "And um, you know,",
                    "start_time": 937.36,
                    "end_time": 938.4,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1221819230.27639,
                        "speech_rate": 4.40771,
                        "articulation_rate": 5.20156,
                        "phonation_time_ratio": 0.84738,
                        "mean_length_of_runs": 0.0625,
                        "silent_pauses_rate": 0.27548,
                        "MPD": 0.03462
                    },
                    "phonetics_features": {
                        "total_time": 3.63,
                        "articulation_rate": 5.20156,
                        "silent_pauses": 1,
                        "total_syllables": 16,
                        "phonation_time": 3.076
                    }
                },
                {
                    "id": 160,
                    "act": "when I think about what they are now, it's better,",
                    "start_time": 938.4,
                    "end_time": 940.72,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10139707124.77506,
                        "speech_rate": 6.27306,
                        "articulation_rate": 6.27306,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 2.71,
                        "articulation_rate": 6.27306,
                        "silent_pauses": 0,
                        "total_syllables": 17,
                        "phonation_time": 2.71
                    }
                },
                {
                    "id": 161,
                    "act": "but actually it's still kind of, I dunno, like a massive junky thing on the table.",
                    "start_time": 940.72,
                    "end_time": 946.4,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2618867764.25204,
                        "speech_rate": 4.91803,
                        "articulation_rate": 6.65188,
                        "phonation_time_ratio": 0.73934,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.053
                    },
                    "phonetics_features": {
                        "total_time": 1.22,
                        "articulation_rate": 6.65188,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 0.902
                    }
                },
                {
                    "id": 158,
                    "act": "Maybe we could think about how, could be more, you know, streamlined. S",
                    "start_time": 946.4,
                    "end_time": 952.63,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 707197327.53282,
                        "speech_rate": 2.27273,
                        "articulation_rate": 2.27273,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.44,
                        "articulation_rate": 2.27273,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.44
                    }
                },
                {
                    "id": 162,
                    "act": "Something like that, yeah.",
                    "start_time": 953.06,
                    "end_time": 954.2,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 223413789.35479,
                        "speech_rate": 5.40541,
                        "articulation_rate": 6.09756,
                        "phonation_time_ratio": 0.88649,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.021
                    },
                    "phonetics_features": {
                        "total_time": 1.48,
                        "articulation_rate": 6.09756,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.312
                    }
                },
                {
                    "id": 163,
                    "act": "Or whatever would be technologically reasonable.",
                    "start_time": 954.2,
                    "end_time": 956.35,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 479218630.44704,
                        "speech_rate": 1.53846,
                        "articulation_rate": 1.64474,
                        "phonation_time_ratio": 0.93538,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.042
                    },
                    "phonetics_features": {
                        "total_time": 0.65,
                        "articulation_rate": 1.64474,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.608
                    }
                },
                {
                    "id": 166,
                    "act": "'Cause it could b it could it could be that f",
                    "start_time": 957.54,
                    "end_time": 959.24,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 360600048.96967,
                        "speech_rate": 5.52147,
                        "articulation_rate": 6.62739,
                        "phonation_time_ratio": 0.83313,
                        "mean_length_of_runs": 0.05556,
                        "silent_pauses_rate": 0.30675,
                        "MPD": 0.03022
                    },
                    "phonetics_features": {
                        "total_time": 3.26,
                        "articulation_rate": 6.62739,
                        "silent_pauses": 1,
                        "total_syllables": 18,
                        "phonation_time": 2.716
                    }
                },
                {
                    "id": 167,
                    "act": "it could be that functionally that doesn't make it any better,",
                    "start_time": 959.24,
                    "end_time": 961.34,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10139570961.05183,
                        "speech_rate": 1.14943,
                        "articulation_rate": 1.87266,
                        "phonation_time_ratio": 0.61379,
                        "mean_length_of_runs": 0.66667,
                        "silent_pauses_rate": 0.76628,
                        "MPD": 0.336
                    },
                    "phonetics_features": {
                        "total_time": 2.61,
                        "articulation_rate": 1.87266,
                        "silent_pauses": 2,
                        "total_syllables": 3,
                        "phonation_time": 1.602
                    }
                },
                {
                    "id": 168,
                    "act": "but that just the appeal of of not having",
                    "start_time": 961.34,
                    "end_time": 963.91,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 353728037.87413,
                        "speech_rate": 3.125,
                        "articulation_rate": 3.125,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.96,
                        "articulation_rate": 3.125,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.96
                    }
                },
                {
                    "id": 169,
                    "act": "You know, these days there's a r pe things in people's homes are becoming more and more like chic, you know.",
                    "start_time": 963.91,
                    "end_time": 969.56,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 225253439.81035,
                        "speech_rate": 3.84615,
                        "articulation_rate": 5.40541,
                        "phonation_time_ratio": 0.71154,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.075
                    },
                    "phonetics_features": {
                        "total_time": 2.08,
                        "articulation_rate": 5.40541,
                        "silent_pauses": 0,
                        "total_syllables": 8,
                        "phonation_time": 1.48
                    }
                },
                {
                    "id": 170,
                    "act": "Um, nicer materials",
                    "start_time": 969.56,
                    "end_time": 971.36,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2611839842.36041,
                        "speech_rate": 3.22581,
                        "articulation_rate": 7.8125,
                        "phonation_time_ratio": 0.4129,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.182
                    },
                    "phonetics_features": {
                        "total_time": 0.62,
                        "articulation_rate": 7.8125,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.256
                    }
                },
                {
                    "id": 171,
                    "act": "and might be",
                    "start_time": 971.36,
                    "end_time": 972.96,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 190511879.60282,
                        "speech_rate": 4.92091,
                        "articulation_rate": 5.32117,
                        "phonation_time_ratio": 0.92478,
                        "mean_length_of_runs": 0.03571,
                        "silent_pauses_rate": 0.17575,
                        "MPD": 0.01529
                    },
                    "phonetics_features": {
                        "total_time": 5.69,
                        "articulation_rate": 5.32117,
                        "silent_pauses": 1,
                        "total_syllables": 28,
                        "phonation_time": 5.262
                    }
                },
                {
                    "id": 172,
                    "act": "be worth exploring anyway.",
                    "start_time": 975.57,
                    "end_time": 976.83,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 491207590.64086,
                        "speech_rate": 3.21839,
                        "articulation_rate": 4.72654,
                        "phonation_time_ratio": 0.68092,
                        "mean_length_of_runs": 0.21429,
                        "silent_pauses_rate": 0.68966,
                        "MPD": 0.09914
                    },
                    "phonetics_features": {
                        "total_time": 4.35,
                        "articulation_rate": 4.72654,
                        "silent_pauses": 3,
                        "total_syllables": 14,
                        "phonation_time": 2.962
                    }
                },
                {
                    "id": 173,
                    "act": "Okay.",
                    "start_time": 1019.67,
                    "end_time": 1020.01,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 220246277.13798,
                        "speech_rate": 5.10204,
                        "articulation_rate": 5.31915,
                        "phonation_time_ratio": 0.95918,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.008
                    },
                    "phonetics_features": {
                        "total_time": 0.98,
                        "articulation_rate": 5.31915,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 0.94
                    }
                },
                {
                    "id": 174,
                    "act": "Um.",
                    "start_time": 1039.8,
                    "end_time": 1040.97,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 146361111.08889,
                        "speech_rate": 4.0,
                        "articulation_rate": 4.0,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 0.5,
                        "articulation_rate": 4.0,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.5
                    }
                },
                {
                    "id": 175,
                    "act": "Before we wrap up, just to make sure we're all on the same page here,",
                    "start_time": 1047.17,
                    "end_time": 1050.09,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 721248421.10266,
                        "speech_rate": 0.64935,
                        "articulation_rate": 1.52439,
                        "phonation_time_ratio": 0.42597,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.884
                    },
                    "phonetics_features": {
                        "total_time": 1.54,
                        "articulation_rate": 1.52439,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.656
                    }
                },
                {
                    "id": 176,
                    "act": "um, do we",
                    "start_time": 1050.09,
                    "end_time": 1052.89,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1.3432509106829211e+29,
                        "speech_rate": 0.71429,
                        "articulation_rate": 2.11864,
                        "phonation_time_ratio": 0.33714,
                        "mean_length_of_runs": 0.5,
                        "silent_pauses_rate": 0.35714,
                        "MPD": 0.928
                    },
                    "phonetics_features": {
                        "total_time": 2.8,
                        "articulation_rate": 2.11864,
                        "silent_pauses": 1,
                        "total_syllables": 2,
                        "phonation_time": 0.944
                    }
                },
                {
                    "id": 177,
                    "act": "We were given sort of an example of a coffee machine or something,",
                    "start_time": 1052.89,
                    "end_time": 1056.51,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 2611839842.36041,
                        "speech_rate": 4.83871,
                        "articulation_rate": 6.14754,
                        "phonation_time_ratio": 0.7871,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.044
                    },
                    "phonetics_features": {
                        "total_time": 0.62,
                        "articulation_rate": 6.14754,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.488
                    }
                },
                {
                    "id": 178,
                    "act": "right?",
                    "start_time": 1056.51,
                    "end_time": 1057.14,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1222677771.85781,
                        "speech_rate": 4.3152,
                        "articulation_rate": 5.44508,
                        "phonation_time_ratio": 0.7925,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.04809
                    },
                    "phonetics_features": {
                        "total_time": 5.33,
                        "articulation_rate": 5.44508,
                        "silent_pauses": 0,
                        "total_syllables": 23,
                        "phonation_time": 4.224
                    }
                },
                {
                    "id": 179,
                    "act": "Well,",
                    "start_time": 1057.14,
                    "end_time": 1057.41,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 344075124.6273,
                        "speech_rate": 2.17391,
                        "articulation_rate": 2.29358,
                        "phonation_time_ratio": 0.94783,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.024
                    },
                    "phonetics_features": {
                        "total_time": 0.46,
                        "articulation_rate": 2.29358,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.436
                    }
                },
                {
                    "id": 180,
                    "act": "um",
                    "start_time": 1058.61,
                    "end_time": 1059.15,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1219729687.39084,
                        "speech_rate": 7.38916,
                        "articulation_rate": 7.70021,
                        "phonation_time_ratio": 0.95961,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.00547
                    },
                    "phonetics_features": {
                        "total_time": 2.03,
                        "articulation_rate": 7.70021,
                        "silent_pauses": 0,
                        "total_syllables": 15,
                        "phonation_time": 1.948
                    }
                },
                {
                    "id": 181,
                    "act": "are we at ma right now on the assumption that our television remote control may have features which go beyond the television?",
                    "start_time": 1060.99,
                    "end_time": 1067.54,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 275832774.11272,
                        "speech_rate": 1.5748,
                        "articulation_rate": 6.57895,
                        "phonation_time_ratio": 0.23937,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.483
                    },
                    "phonetics_features": {
                        "total_time": 1.27,
                        "articulation_rate": 6.57895,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.304
                    }
                },
                {
                    "id": 182,
                    "act": "Or are we keeping sort of like a a design commitment to television features?",
                    "start_time": 1067.54,
                    "end_time": 1073.79,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 351290886.21073,
                        "speech_rate": 3.94737,
                        "articulation_rate": 4.26136,
                        "phonation_time_ratio": 0.92632,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01867
                    },
                    "phonetics_features": {
                        "total_time": 0.76,
                        "articulation_rate": 4.26136,
                        "silent_pauses": 0,
                        "total_syllables": 3,
                        "phonation_time": 0.704
                    }
                },
                {
                    "id": 183,
                    "act": "I I don't know.",
                    "start_time": 1073.79,
                    "end_time": 1074.44,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 224484291.28998,
                        "speech_rate": 3.37079,
                        "articulation_rate": 5.0,
                        "phonation_time_ratio": 0.67416,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.09667
                    },
                    "phonetics_features": {
                        "total_time": 1.78,
                        "articulation_rate": 5.0,
                        "silent_pauses": 0,
                        "total_syllables": 6,
                        "phonation_time": 1.2
                    }
                },
                {
                    "id": 185,
                    "act": "Yep.",
                    "start_time": 1076.56,
                    "end_time": 1077.45,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1198369036.64903,
                        "speech_rate": 6.06061,
                        "articulation_rate": 6.17284,
                        "phonation_time_ratio": 0.98182,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.003
                    },
                    "phonetics_features": {
                        "total_time": 0.33,
                        "articulation_rate": 6.17284,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.324
                    }
                },
                {
                    "id": 186,
                    "act": "Yeah, sure.",
                    "start_time": 1077.45,
                    "end_time": 1078.06,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 354618034.32091,
                        "speech_rate": 3.77358,
                        "articulation_rate": 3.80228,
                        "phonation_time_ratio": 0.99245,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.002
                    },
                    "phonetics_features": {
                        "total_time": 1.06,
                        "articulation_rate": 3.80228,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 1.052
                    }
                },
                {
                    "id": 184,
                    "act": "Okay.",
                    "start_time": 1081.99,
                    "end_time": 1082.38,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 276365567.55265,
                        "speech_rate": 6.56934,
                        "articulation_rate": 6.56934,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.37,
                        "articulation_rate": 6.56934,
                        "silent_pauses": 0,
                        "total_syllables": 9,
                        "phonation_time": 1.37
                    }
                },
                {
                    "id": 187,
                    "act": "Okay, yeah.",
                    "start_time": 1086.96,
                    "end_time": 1087.76,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 224767224.74018,
                        "speech_rate": 6.91489,
                        "articulation_rate": 6.91489,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.88,
                        "articulation_rate": 6.91489,
                        "silent_pauses": 0,
                        "total_syllables": 13,
                        "phonation_time": 1.88
                    }
                },
                {
                    "id": 188,
                    "act": "Okay.",
                    "start_time": 1089.89,
                    "end_time": 1090.23,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 702032038.28902,
                        "speech_rate": 5.88235,
                        "articulation_rate": 6.25,
                        "phonation_time_ratio": 0.94118,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.01
                    },
                    "phonetics_features": {
                        "total_time": 0.34,
                        "articulation_rate": 6.25,
                        "silent_pauses": 0,
                        "total_syllables": 2,
                        "phonation_time": 0.32
                    }
                },
                {
                    "id": 189,
                    "act": "Okay.",
                    "start_time": 1093.83,
                    "end_time": 1094.13,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 1216066937.37851,
                        "speech_rate": 3.53982,
                        "articulation_rate": 5.10204,
                        "phonation_time_ratio": 0.69381,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0865
                    },
                    "phonetics_features": {
                        "total_time": 1.13,
                        "articulation_rate": 5.10204,
                        "silent_pauses": 0,
                        "total_syllables": 4,
                        "phonation_time": 0.784
                    }
                },
                {
                    "id": 190,
                    "act": "Okay.",
                    "start_time": 1098.52,
                    "end_time": 1098.85,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 264232667.11403,
                        "speech_rate": 2.12766,
                        "articulation_rate": 2.23214,
                        "phonation_time_ratio": 0.95319,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.022
                    },
                    "phonetics_features": {
                        "total_time": 0.47,
                        "articulation_rate": 2.23214,
                        "silent_pauses": 0,
                        "total_syllables": 1,
                        "phonation_time": 0.448
                    }
                },
                {
                    "id": 193,
                    "act": "Alright.",
                    "start_time": 1102.4,
                    "end_time": 1102.86,
                    "speaker_id": "D",
                    "measures": {
                        "short_term_energy": 10134714550.34982,
                        "speech_rate": 4.5045,
                        "articulation_rate": 4.5045,
                        "phonation_time_ratio": 1.0,
                        "mean_length_of_runs": 0.0,
                        "silent_pauses_rate": 0.0,
                        "MPD": 0.0
                    },
                    "phonetics_features": {
                        "total_time": 1.11,
                        "articulation_rate": 4.5045,
                        "silent_pauses": 0,
                        "total_syllables": 5,
                        "phonation_time": 1.11
                    }
                }
            ]
        },
        {
            "type": "confidenceSequence",
            "step": "Confidence Level",
            "data": [
                {
                    "title": "remote control",
                    "acts": [
                        {
                            "act": "Okay", 
                            "confidence":"1",
                        },
                        {
                            "act": "Um well this is the kick-off meeting for our our project. Um and um this is just what we're gonna be doing over the next twenty five minutes. Um so first of all, just to kind of make sure that we all know each other, I'm Laura and I'm the project manager. Do you want to introduce yourself again?",
                            "confidence": "0"
                        }
                    ]
                },
                {
                    "title": "remote control",
                    "acts": [
                        {
                            "act": "Okay", 
                            "confidence":"1",
                        },
                        {
                            "act": "Um well this is the kick-off meeting for our our project. Um and um this is just what we're gonna be doing over the next twenty five minutes. Um so first of all, just to kind of make sure that we all know each other, I'm Laura and I'm the project manager. Do you want to introduce yourself again?",
                            "confidence": "0"
                        }
                    ]
                },
                {
                    "title": "remote control",
                    "acts": [
                        {
                            "act": "Okay", 
                            "confidence":"1",
                        },
                        {
                            "act": "Um well this is the kick-off meeting for our our project. Um and um this is just what we're gonna be doing over the next twenty five minutes. Um so first of all, just to kind of make sure that we all know each other, I'm Laura and I'm the project manager. Do you want to introduce yourself again?",
                            "confidence": "0"
                        }
                    ]
                },
                {
                    "title": "remote control",
                    "acts": [
                        {
                            "act": "Okay", 
                            "confidence":"1",
                        },
                        {
                            "act": "Um well this is the kick-off meeting for our our project. Um and um this is just what we're gonna be doing over the next twenty five minutes. Um so first of all, just to kind of make sure that we all know each other, I'm Laura and I'm the project manager. Do you want to introduce yourself again?",
                            "confidence": "0"
                        }
                    ]
                },
            ]    
        },
        {
            "type": "sequence",
            "step": "Output",
            "data": [{
                "title": "remote control",
                "acts": ["Okay", "Um well this is the kick-off meeting for our our project. Um and um this is just what we're gonna be doing over the next twenty five minutes. Um so first of all, just to kind of make sure that we all know each other, I'm Laura and I'm the project manager. Do you want to introduce yourself again?"]
            },
            {
                "title": "xyz",
                "acts": ["Okay", "Um well this is the kick-off meeting for our our project. Um and um this is just what we're gonna be doing over the next twenty five minutes. Um so first of all, just to kind of make sure that we all know each other, I'm Laura and I'm the project manager. Do you want to introduce yourself again?"]
            }
            ]    
        }
    ]
  }

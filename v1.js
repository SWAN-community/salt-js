/* ****************************************************************************
 * Copyright 2021 51 Degrees Mobile Experts Limited (51degrees.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 * ***************************************************************************/

/* This implementation needs to be modified to support screen readers and ARIA 
 * prior to production use. It is provided for conceptual demonstration purposes 
 * only at this time.
 */

/* Icons provided by the Noun Project under creative commons licence. */ 

function SWANSalt(element, initValue) {

    const images = [
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M93.4,27.4c0-7.7-6.3-14-14-14c-4.3,0-8.3,2-11,5.3c-5.1-2.6-11-4.1-17.1-4.1c-7,0-13.6,1.9-19.2,5.3  c-2.5-4-6.9-6.5-11.8-6.5c-7.7,0-14,6.3-14,14c0,6,3.7,11.1,9.1,13.1c-1.3,3.8-2,7.8-2,12c0,20.9,17,37.9,37.9,37.9  c20.9,0,37.9-17,37.9-37.9c0-4.7-0.9-9.1-2.4-13.3C90.9,36.8,93.4,32.3,93.4,27.4z M34.4,59c-1.8,0-3.2-1.9-3.2-4.2  c0-2.3,1.4-4.2,3.2-4.2c1.8,0,3.2,1.9,3.2,4.2C37.6,57.1,36.2,59,34.4,59z M59.1,76.3c-1.4,0.5-2.7,0.8-3.8,0.8  c-1.3,0-2.5-0.4-3.4-1.1c-0.3-0.2-0.5-0.5-0.7-0.7c-0.2,0.2-0.4,0.5-0.7,0.7c-0.9,0.8-2,1.1-3.4,1.1c-1.1,0-2.4-0.3-3.8-0.8  c-0.6-0.2-1-1-0.7-1.6c0.2-0.6,1-1,1.6-0.7c1.5,0.6,3.6,1,4.7,0.1c0.7-0.6,0.9-1.6,1-2.6c0-0.5,0-1,0-1.4c0,0,0,0,0-0.1  c-2.5-0.5-4.3-2.2-4.3-4.3c0-2.5,2.6-4.5,5.8-4.5c3.2,0,5.8,2,5.8,4.5c0,2.2-2.1,4-4.8,4.4c0,0.4,0,0.9,0,1.4c0.1,1,0.4,2,1,2.5  c1.1,0.9,3.2,0.5,4.7-0.1c0.6-0.2,1.4,0.1,1.6,0.7C60.1,75.3,59.7,76,59.1,76.3z M66.4,59.5c-1.8,0-3.2-1.9-3.2-4.2  c0-2.3,1.4-4.2,3.2-4.2s3.2,1.9,3.2,4.2C69.7,57.6,68.2,59.5,66.4,59.5z"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="none" d="M32.441,45.183c4.348,3.492,7.025,8.594,7.419,14.134l4.244,0.085l-9.6-17.809L32.441,45.183z"/><path fill="none" d="M17.732,62.904c-0.091-0.129-0.145-0.272-0.206-0.412c-0.309-0.697-0.28-1.503,0.15-2.257l7.436-12.933   c-1.647-0.636-3.376-0.958-5.146-0.958c-7.936,0-14.393,6.457-14.394,14.395C5.573,68.675,12.03,75.13,19.966,75.13   c6.471,0,12.202-4.432,13.885-10.634L19.955,64.22C18.985,64.198,18.175,63.719,17.732,62.904z"/><path fill="none" d="M29.626,50.078l-5.135,8.933l9.769,0.196C33.885,55.709,32.226,52.441,29.626,50.078z"/><polygon fill="none" points="48.745,56.851 60.185,39.561 39.425,39.561  "/><path fill="none" d="M80.033,46.005c-1.829,0-3.621,0.349-5.331,1.037l7.622,13.476c0.471,0.834,0.479,1.764,0.021,2.552   c-0.502,0.859-1.463,1.415-2.448,1.415c0,0,0,0-0.001,0c-0.899,0-1.683-0.476-2.153-1.307l-7.517-13.292   c-2.923,2.726-4.585,6.52-4.585,10.513c0,7.936,6.457,14.393,14.393,14.393c7.937,0,14.394-6.457,14.394-14.393   C94.427,52.463,87.97,46.005,80.033,46.005z"/><path d="M80.033,40.43c-2.791,0-5.509,0.584-8.089,1.737l-8.251-14.59l3.871,0c0.106,0,0.217-0.01,0.328-0.031l0.073-0.015   c0.108-0.025,0.216-0.059,0.291-0.093c0.096-0.037,0.181-0.083,0.32-0.167c0.115-0.076,0.219-0.162,0.324-0.267l4.359-4.375   c0.562-0.565,0.723-1.331,0.426-2.046c-0.315-0.759-1.081-1.289-1.862-1.289c-0.491,0-0.949,0.199-1.326,0.576l-3.789,3.803h-5.354   c-0.452-0.441-1.038-0.681-1.677-0.681c-0.985,0-1.944,0.554-2.444,1.413c-0.458,0.786-0.449,1.714,0.022,2.548l4.133,7.309H36.571   l-1.782-3.307h4.015c1.251,0,1.905-0.981,1.905-1.951s-0.654-1.951-1.905-1.951H28.26c-1.252,0-1.906,0.981-1.906,1.951   s0.654,1.951,1.906,1.951h0.527c0.031,0.072,0.065,0.143,0.103,0.211l2.604,4.829c-0.045,0.128-0.078,0.257-0.103,0.387   l-3.481,6.055c-2.536-1.109-5.205-1.671-7.942-1.671c-11.01,0-19.968,8.958-19.968,19.969c0,11.011,8.958,19.968,19.968,19.968   c9.573,0,17.729-6.741,19.57-16.097l8.37,0.167c0.222,0,0.442-0.028,0.674-0.087c0.947-0.074,1.828-0.653,2.28-1.499   c0.071-0.079,0.14-0.161,0.204-0.257l14.31-21.625l2.057,3.638c-4.688,3.824-7.366,9.428-7.366,15.455   c0,11.01,8.957,19.967,19.968,19.967c11.01,0,19.968-8.957,19.968-19.967C100.001,49.388,91.043,40.43,80.033,40.43z M19.966,75.13   c-7.936,0-14.393-6.455-14.394-14.391c0.001-7.938,6.458-14.395,14.394-14.395c1.771,0,3.499,0.322,5.146,0.958l-7.436,12.933   c-0.431,0.754-0.459,1.56-0.15,2.257c0.062,0.14,0.115,0.283,0.206,0.412c0.442,0.814,1.253,1.294,2.223,1.315l13.896,0.276   C32.168,70.698,26.437,75.13,19.966,75.13z M24.491,59.011l5.135-8.933c2.6,2.364,4.259,5.631,4.634,9.129L24.491,59.011z    M39.86,59.317c-0.394-5.54-3.071-10.642-7.419-14.134l2.063-3.589l9.6,17.809L39.86,59.317z M48.745,56.851l-9.32-17.29h20.76   L48.745,56.851z M80.033,74.792c-7.936,0-14.393-6.457-14.393-14.393c0-3.993,1.662-7.787,4.585-10.513l7.517,13.292   c0.471,0.831,1.254,1.307,2.153,1.307c0.001,0,0.001,0,0.001,0c0.985,0,1.946-0.556,2.448-1.415   c0.458-0.788,0.45-1.718-0.021-2.552l-7.622-13.476c1.71-0.688,3.502-1.037,5.331-1.037c7.937,0,14.394,6.458,14.394,14.395   C94.427,68.335,87.97,74.792,80.033,74.792z"/></g></svg>',
        '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.704 20.786 100 84.67375000000001" enable-background="new -0.704 20.786 100 67.739" xml:space="preserve"><path d="M98.686,41.55c-0.609-0.7-3.235-2.146-3.771-3.831c-1.465-5.305-7.68-7.251-7.68-7.251l0.667-9.682	c-2.757,0.841-6.581,4.013-10.58,8.03c-0.623-0.081-1.262-0.139-1.91-0.139c-4.592,0-8.683,2.139-11.346,5.463	c-5.792-4.752-12.1-8.063-22.343-7.699C20.039,27.218,8.152,41.867,4.252,62.13c-4.987,3.972-5.215,8.396-4.833,10.836	c1.16,7.44,9.97,12.845,15.854,14.304c17.662,4.384,35.815-2.925,46.243-18.61c1.399-2.102,0.827-4.941-1.279-6.341	c-2.1-1.398-4.938-0.826-6.339,1.275C45.636,76.021,31.34,81.831,17.475,78.39c-3.853-0.957-8.261-4.222-8.943-6.537l1.159,0.293	h31.521c4.022-2.448,7.594-5.837,10.406-10.067c2.232-3.363,6.787-4.275,10.146-2.043c3.358,2.234,4.277,6.785,2.043,10.146	c-0.448,0.669-0.912,1.32-1.384,1.964h19.023c-0.074-0.154,0.082-0.065,0.082-0.065c-0.158-0.237-1.931-2.989-2.128-6.117	c-0.375-5.922,3.597-10.823,3.597-10.823l0.041-0.059c12.408,2.168,15.094-5.622,15.781-9.412	C99.138,43.918,99.774,42.284,98.686,41.55z M88.248,40.189c-0.945,0-1.712-0.768-1.712-1.713c0-0.946,0.767-1.713,1.712-1.713	c0.947,0,1.713,0.768,1.713,1.713S89.195,40.189,88.248,40.189z"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" x="0px" y="0px"><title>weather, cloud, rain, rainy, forecast, water, drop</title><g data-name="cloud rain"><path d="M26.62,14.83A6,6,0,0,1,22,17H9.17a5.08,5.08,0,0,1-5.06-4A5,5,0,0,1,7.88,7.13,7.5,7.5,0,0,1,21.05,5.07,7.12,7.12,0,0,1,22,5h0a6,6,0,0,1,4.62,9.83ZM9.55,19.17a1,1,0,0,0-1.38.28l-2,3a1,1,0,0,0,.28,1.38A.94.94,0,0,0,7,24a1,1,0,0,0,.83-.45l2-3A1,1,0,0,0,9.55,19.17Zm5,0a1,1,0,0,0-1.38.28l-4,6a1,1,0,0,0,.28,1.38A.94.94,0,0,0,10,27a1,1,0,0,0,.83-.45l4-6A1,1,0,0,0,14.55,19.17Zm3.62.28-4,6a1,1,0,0,0,.28,1.38A.94.94,0,0,0,15,27a1,1,0,0,0,.83-.45l4-6a1,1,0,0,0-1.66-1.1Zm5,0-2,3a1,1,0,0,0,.28,1.38A.94.94,0,0,0,22,24a1,1,0,0,0,.83-.45l2-3a1,1,0,0,0-1.66-1.1Z"/></g></svg>',
        '<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 72" version="1.1" x="0px" y="0px"><title>Dog</title><desc>Created with Sketch.</desc><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M53.3977,64.227 C45.8587,65.417 47.0927,61.314 47.0057,56.638 L46.5617,47.469 L44.6257,56.329 C44.2737,58.007 43.8287,59.55 46.2107,60.784 C47.8887,62.24 45.9947,64.313 44.1877,64.047 C38.6697,64.227 39.4677,60.562 39.9467,57.964 L40.2567,54.213 C40.4787,51.658 40.9657,50.066 41.0957,46.494 L40.3497,44.557 C34.3957,43.014 30.2917,41.867 25.6637,39.398 L22.3497,39.837 C20.8517,40.06 21.2527,41.824 21.0747,42.971 L20.5927,46.099 L17.8517,53.201 L17.6377,53.818 C17.4577,54.306 17.5017,56.244 18.2117,57.254 L19.6607,60.21 C20.8077,61.889 21.1157,66.035 18.0317,64.707 L15.7367,63.739 C14.1077,63.08 12.7817,58.539 12.2137,55.231 L12.2587,50.598 C10.8447,50.159 10.2707,58.496 10.8447,60.21 L12.2587,64.535 C12.6937,65.942 11.0677,66.43 9.9187,66.43 C7.2287,66.43 6.0377,63.696 5.4637,61.4 L5.0257,59.686 C4.3597,57.04 4.7107,53.021 6.0807,50.683 L6.6967,49.234 C7.9307,46.365 6.4317,44.291 6.0807,42.835 C4.9327,38.158 4.0067,33.618 7.2287,29.119 L7.4517,28.81 C7.3587,28.459 6.4317,27.713 5.8577,25.949 C4.6237,21.974 3.5197,15.454 5.0677,15.454 L6.0807,15.403 C8.6867,15.403 7.9307,26.164 11.0227,25.461 L33.4277,25.684 L37.3517,24.621 C38.8077,24.227 40.0407,23.302 41.3177,22.505 L43.8707,20.92 C46.8277,23.876 49.3897,25.684 53.6197,27.226 C54.7687,35.998 53.4917,37.943 52.3867,43.186 L51.9417,45.303 C51.1527,49.055 50.8867,52.935 51.0667,56.773 L51.1527,58.581 C51.1097,60.433 52.1637,60.562 53.6197,61.006 C54.5457,61.493 55.2067,63.345 53.3977,64.227 Z M58.134,10.6493 C59.367,11.4883 60.91,12.9873 62.145,14.3073 L63.693,15.9873 C64.704,17.0413 66.247,16.9113 67.617,17.1763 L68.099,17.2633 C69.596,18.0523 69.118,19.6443 68.629,20.8353 L68.32,21.5823 C66.906,24.9823 62.718,25.2473 59.762,23.6543 L58.441,22.9523 L57.997,22.9523 L57.073,23.5693 L55.178,25.0683 C51.341,23.3893 48.213,21.3663 45.695,18.6753 L51.477,11.4383 L53.415,8.6193 L53.809,7.6933 L54.253,6.6753 C54.605,5.5343 56.06,4.4303 57.122,4.8673 C58.134,5.3123 58.794,7.2493 58.529,8.2683 L58.263,9.4153 L58.134,10.6493 Z" fill="#000000"></path></g></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><style type="text/css">	.st0{fill:#010101;}</style><path class="st0" d="M94.4,44.9c-0.8-1.6-2.5-3-4.4-3.3c-1.9-0.3-4,0.1-5.1,1c-1.3,1-2.2,2.5-2,4.3c0.1,1.7,1.1,2.9,2.7,3.6  c1.2,0.5,3,0.3,3.6-0.2c0.9-0.6,1.3-1.3,1.2-2.6c0-0.3-0.9-1.5-1.9-1.3c-0.3,0.1-0.7,0.7-0.4,1.3c0.3,0.6-0.1,1.1-0.9,1  c-0.9-0.1-1.4-0.8-1.6-1.2c-0.3-0.7-0.2-2.1,1.1-3c1.3-0.9,3.9-0.6,5,0.7c1.2,1.5,0.7,3.5,0.4,4.2c-0.4,1.1-1.7,2.3-3.8,2.8  c-1.4,0.3-3.8,0-5.6-1.1c-1.9-1.2-3.7-5.3-3.7-5.4C77.4,39,71.9,25.2,52,25.3c-26.9,0.1-27.7,21.3-28.7,25.1c0,0-1.7,8.2-2.4,10  c-1,2.8-3.2,5.5-5.6,5.4c-5.9-0.1-3.8-9.5-3.8-9.5l-6.3-0.4c0,0-2.9,16.7,9.5,16.6c5.9,0,8.7-5,13.7-9.9c3.3-3.3,6.5-1.2,7.5,0.2  c1.6,2.3,0.3,13.8,0.3,13.8l12.6,0.1l0.1-5.1c0.1-5.7,3.9-8.8,8.6-8.8h0c4.7,0,8.5,4.2,8.5,9v4.4l13,0.1l0.4-24.7  c0.4,0.4,1,1,1.7,1.4c1.5,0.9,3.6,1.6,4.3,1.7c2,0.2,4.3-0.1,5.9-1c0.7-0.4,2.1-1.1,3-3.1C94.9,49.3,95.3,46.6,94.4,44.9z   M34.7,48.9c-0.8,0.4-1.7,0-2.1-0.8c-0.4-0.8,0-1.7,0.8-2.1c0.8-0.4,1.7,0,2.1,0.8C35.8,47.6,35.5,48.5,34.7,48.9z M49.9,49.4  C49,52,47,54,44.9,54.6c-0.5,0.1-1,0.2-1.5,0.2C41.7,54.8,40,54,39,52c-0.1-0.3,0-0.6,0.2-0.7c0.2-0.1,0.5,0,0.6,0.2  c0.7,1.1,1.6,1.9,2.8,2.1c1.3,0.3,2.7-0.1,3.9-1h0c2.1-1.6,3.2-4.5,3.1-8.5c0-2.6-0.5-7.2-3.3-9.4c-1-0.8-2.2-1-3.2-0.7  c-1.2,0.4-2.1,1.4-2.6,2.8c-0.1,0.2-0.2,0.3-0.4,0.2c-0.2-0.1-0.3-0.3-0.3-0.5c0.3-1.4,1.1-2.5,2.3-3.2c1.1-0.6,2.3-0.7,3.3-0.3  c2.1,0.8,3.8,3.2,4.6,6.4C50.7,42.2,51,46.3,49.9,49.4z"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" x="0px" y="0px"><title>weather, Moon, night, sleep, crescent, Half moon, nature</title><g><path d="M24.94,15.9A10,10,0,0,1,7.3,22.36a1,1,0,0,1,1-1.63A8,8,0,0,0,16,7.74,1,1,0,0,1,16,6.58,1,1,0,0,1,17,6.12,10.06,10.06,0,0,1,24.94,15.9Z"/></g></svg>',
        '<svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><switch><foreignObject requiredExtensions="http://ns.adobe.com/AdobeIllustrator/10.0/" x="0" y="0" width="1" height="1"/><g i:extraneous="self"><g><path d="M95.5,46L53.5,3.9c-1.9-1.9-5-1.9-6.9,0L4.5,46c-1.9,1.9-1.9,5,0,6.9c1.9,1.9,5,1.9,6.9,0L49,15.3c0.6-0.6,1.5-0.6,2,0     l37.6,37.6c1.9,1.9,5,1.9,6.9,0C97.4,51,97.4,47.9,95.5,46z"/><path d="M16,56.9v36.2c0,2.4,2,4.4,4.4,4.4H36c1.7,0,3.1-1.4,3.1-3.1V70.3c0-2.3,1.9-4.1,4.1-4.1h13.7c2.3,0,4.1,1.9,4.1,4.1     v24.1c0,1.7,1.4,3.1,3.1,3.1h15.5c2.4,0,4.4-2,4.4-4.4V56.9L50,23L16,56.9z M55.8,49.2c0,3.2-2.6,5.8-5.8,5.8     c-3.2,0-5.8-2.6-5.8-5.8c0-3.2,2.6-5.8,5.8-5.8C53.2,43.4,55.8,46,55.8,49.2z"/></g></g></switch></svg>',
        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;color:#000000;enable-background:accumulate;" d="m 57.119073,970.31534 c -0.644,0.008 -1.3091,0.39348 -1.7812,1.09375 l -17.9375,30.78121 -5.3125,-9.15621 c -0.3361,-0.5832 -0.9837,-0.97415 -1.6562,-1 -0.7248,-0.0288 -1.4504,0.37157 -1.8126,1 L 6.4940731,1031.0966 c -1.1914,1.9778 0.091,3.3158 1.9063,3.3125 l 83.6250019,0 c 1.3917,-0.01 2.4145,-1.7946 1.7187,-3 L 58.806673,971.40909 c -0.4205,-0.73137 -1.0435,-1.10153 -1.6876,-1.09375 z m -0.9374,12.8125 a 2.0001998,2.0001998 0 0 1 1.8437,1.03125 l 16.375,27.96871 a 2.0098544,2.0098544 0 1 1 -3.4687,2.0313 l -16.375,-28.00001 a 2.0001998,2.0001998 0 0 1 1.625,-3.03125 z" fill="#000000" fill-opacity="1" fill-rule="evenodd" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;" viewBox="0 0 333 416.25" x="0px" y="0px" fill-rule="evenodd" clip-rule="evenodd"><defs><style type="text/css">       .fil0 {fill:black}     </style></defs><g><g><path class="fil0" d="M298 216l0 -15 -107 -75 3 -69c-1,-36 -25,-42 -28,-42 -4,0 -27,8 -26,42l2 69 -107 75 0 15 109 -21 3 80 -40 27 0 7 44 0c3,5 8,9 15,9 7,1 13,-3 17,-9l43 0 0 -7 -40 -27 3 -80 109 21z"/></g></g></svg>',
        '<svg fill="#000000" version="1.1" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-0.001 0 97.331 100" enable-background="new -0.001 0 97.331 100" xml:space="preserve"><path d="M97.269,55.907c-0.509-2.957-1.255-5.225-2.218-6.745c-0.827-8.908-3.683-10.534-10.113-11.504	c2.081-4.148,4.14-8.509,5.367-13.916c1.908-8.411,1.688-16.831-0.511-19.584c-0.553-0.693-1.217-1.045-1.972-1.045	c-2.177,0-4.848,2.973-7.953,8.834C79.087,5.37,77.213,0,74.123,0c-1.948,0-3.988,2.239-6.062,6.655	c-3.314,7.059-2.79,14.538,1.471,20.56c3.981,4.251,5.42,7.005,3.359,11.985c-5.591,3.034-9.576,6.172-12.882,10.146	c-2.265-0.201-4.448-0.451-6.562-0.693c-4.134-0.474-8.037-0.92-11.837-0.92c-9.039,0-15.925,2.664-23.029,8.906	c-4.206,3.696-9.006,8.992-11.07,15.188c-1.221-0.765-2.433-0.905-3.561-0.394c-4.969,2.258-4.283,8.896-3.095,12.464	c1.322,3.973,6.182,9.863,10.186,9.863c0.734,0,1.654-0.219,2.501-1.004c0.537,0.522,1.096,1.04,1.694,1.552	c-0.77,1.191-0.979,2.312-0.568,3.109c0.248,0.481,0.835,1.055,2.229,1.055c0.425,0,0.906-0.054,1.372-0.153l27.442-1.123	c1.012-0.086,2.016,0.061,2.981,0.203c0.717,0.106,1.396,0.207,2.042,0.207c1.719,0,2.774-0.765,3.423-2.48	c0.346-0.91,0.316-1.775-0.083-2.571c-0.662-1.312-2.336-2.395-4.895-3.201c0.738-0.608,1.558-1.564,2.243-2.778	c0.557,0.157,1.117,0.338,1.663,0.517c1.536,0.504,3.126,1.025,4.792,1.025c1.809,0,3.489-0.636,5.125-1.927	c0.339,0.977,0.634,1.963,0.923,2.937c0.758,2.557,1.542,5.201,3.1,7.479c0.381,0.83,4.337,1.833,6.534,1.836	c0.004,0,0.008,0,0.013,0c0.294,0,0.553-0.022,0.798-0.054c0.004,0,0.007,0.001,0.01,0.001c0.021,0,0.039-0.005,0.059-0.006	c0.019-0.002,0.042-0.003,0.061-0.006c0.374-0.015,0.727-0.088,1.066-0.168l0.137-0.03c1.238,1.191,2.431,1.82,3.459,1.82	c0.903,0,1.612-0.501,1.997-1.412c1.532-3.634-0.976-4.736-2.808-5.541c-0.349-0.153-0.687-0.301-0.936-0.428	c-3.507-2.646-3.801-7.014-3.007-11.12c3.873-4.007,7.301-10.682,10.45-20.229c2.186-0.07,4.441-0.156,6.657-1.611	c1.089,0.31,2.078,0.1,3.26-0.364c0.221,0.067,0.435,0.102,0.637,0.102c0.499,0,0.938-0.206,1.266-0.597	C97.302,58.058,97.424,56.812,97.269,55.907z"></path></svg>',
        '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 12.7 15.875" version="1.1" x="0px" y="0px"><g transform="translate(0,-284.29998)"><path style="" d="m 3.1258852,288.40873 a 0.03373053,0.03373053 0 0 0 -0.022222,0.0116 0.62568234,0.62568234 0 0 1 -0.73662,0.15471 0.03373053,0.03373053 0 0 0 -0.037037,0 0.69449646,0.69449646 0 0 1 -0.2789441,0.14762 3.3041057,3.3041057 0 0 0 0.1952397,2.41378 2.438194,2.438194 0 0 0 0.9990562,0.9635 1.1940586,1.1940586 0 0 0 1.100221,0 2.438194,2.438194 0 0 0 0.9985271,-0.9635 3.3041057,3.3041057 0 0 0 0.1947106,-2.41378 0.69449646,0.69449646 0 0 1 -0.2783092,-0.14762 0.03373053,0.03373053 0 0 0 -0.035979,0 0.62568234,0.62568234 0 0 1 -0.7371491,-0.15471 0.03373053,0.03373053 0 0 0 -0.044445,-0.0106 1.1478498,1.1478498 0 0 1 -1.2938734,0 0.03373053,0.03373053 0 0 0 -0.022222,-0.0106 z m 1.4842454,0.64096 a 0.18101718,0.18101718 0 0 1 0.1759804,0.19079 0.18101718,0.18101718 0 1 1 -0.3613788,0 0.18101718,0.18101718 0 0 1 0.1853984,-0.19079 z m -1.6285853,0.0106 a 0.18112388,0.18112388 0 0 1 0.1843402,0.18318 0.18112388,0.18112388 0 1 1 -0.3620137,0 0.18112388,0.18112388 0 0 1 0.1776735,-0.18318 z" fill="#000000" stroke="none"/><path style="" d="m 3.1103295,286.38427 a 0.93611596,0.93611596 0 0 1 1.3697471,0 0.22412018,0.22412018 0 0 0 0.2259279,0.0624 0.91229391,0.91229391 0 0 1 1.1615972,0.96329 0.22412018,0.22412018 0 0 0 0.1081491,0.21344 0.50410682,0.50410682 0 1 1 -0.5903754,0.8126 0.22412018,0.22412018 0 0 0 -0.2422243,-0.0339 0.4352927,0.4352927 0 0 1 -0.5134436,-0.10762 0.22412018,0.22412018 0 0 0 -0.2948173,-0.0381 0.95746013,0.95746013 0 0 1 -1.0793743,0 0.22412018,0.22412018 0 0 0 -0.2955581,0.0381 0.4352927,0.4352927 0 0 1 -0.512597,0.10762 0.22412018,0.22412018 0 0 0 -0.2422243,0.0339 0.50410682,0.50410682 0 1 1 -0.5903754,-0.8126 0.22412018,0.22412018 0 0 0 0.1074084,-0.21344 0.91229391,0.91229391 0 0 1 1.1614914,-0.96329 0.22412018,0.22412018 0 0 0 0.2266686,-0.0624 z" fill="#000000" stroke="none"/><path style="" d="m 0.67835101,289.74006 a 1.0531158,1.0531158 0 0 0 1.04233699,-0.18518 3.4944955,3.4944955 0 0 1 0.125927,-0.80551 0.69449647,0.69449647 0 0 1 -0.5993702,-0.39546 1.4141311,1.4141311 0 0 0 -0.71778395,1.1616 0.22711854,0.22711854 0 0 0 0.14889016,0.22455 z" fill="#000000" stroke="none"/><path style="" d="m 6.9121609,289.74006 a 0.22711854,0.22711854 0 0 0 0.1488902,-0.22455 1.4141311,1.4141311 0 0 0 -0.7186305,-1.1616 0.69449647,0.69449647 0 0 1 -0.5985237,0.39546 3.4944955,3.4944955 0 0 1 0.1251863,0.80551 1.0531158,1.0531158 0 0 0 1.0430777,0.18518 z" fill="#000000" stroke="none"/><path style="" d="m 6.2453827,286.31538 a 0.22118797,0.22118797 0 0 1 -0.3066693,0.0392 0.72682112,0.72682112 0 0 0 -0.6992652,-0.0984 1.1026836,1.1026836 0 0 1 0.8177847,1.17175 0.03373053,0.03373053 0 0 0 0.015873,0.0317 0.69449647,0.69449647 0 0 1 0.3274102,0.70847 1.6045207,1.6045207 0 0 1 0.8497427,1.33726 0.41750812,0.41750812 0 0 1 -0.2733357,0.41281 1.2435054,1.2435054 0 0 1 -1.1075226,-0.12624 3.4944955,3.4944955 0 0 1 -0.3570401,1.43768 2.6285835,2.6285835 0 0 1 -1.0801151,1.0435 1.3844481,1.3844481 0 0 1 -0.6585241,0.15535 1.2085336,1.2085336 0 0 0 1.1533432,0.40889 0.22118797,0.22118797 0 0 1 0.2489968,0.13947 1.3946331,1.3946331 0 0 0 2.2208655,0.56223 0.22118797,0.22118797 0 0 1 0.2881506,0 1.4421863,1.4421863 0 0 0 2.2867921,-0.60689 0.22118797,0.22118797 0 0 1 0.2289966,-0.14444 1.4437127,1.4437127 0 0 0 1.363716,-2.19589 0.22118797,0.22118797 0 0 1 0.05608,-0.29334 1.3730569,1.3730569 0 0 0 -0.484449,-2.42986 0.22118797,0.22118797 0 0 1 -0.165927,-0.19969 1.3044468,1.3044468 0 0 0 -1.8941965,-1.07493 0.22118797,0.22118797 0 0 1 -0.2925951,-0.0868 1.5360969,1.5360969 0 0 0 -2.5380111,-0.19026 z" fill="#000000" stroke="none"/><path style="" d="m 4.9978588,293.04443 a 1.5850226,1.5850226 0 0 0 1.1230784,0.98615 v 0.94836 a 0.58709496,0.58709496 0 0 1 -1.1741899,0 v -1.94499 a 0.03079832,0.03079832 0 0 1 0.050794,0.0106 z" fill="#000000" stroke="none"/><path style="" d="m 9.5345113,293.78782 a 1.632576,1.632576 0 0 0 0.6164077,-0.79164 0.03079832,0.03079832 0 0 1 0.03175,-0.0201 1.6341023,1.6341023 0 0 0 0.52593,-0.036 v 2.03843 a 0.58709496,0.58709496 0 0 1 -1.1741895,0 z" fill="#000000" stroke="none"/></g></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M73.68,54.22c-2.93-8.634-8.121-23.269-2.855-31.766c3.801-6.134,10.947-5.352,15.435-0.56   c1.323,1.414,2.245,2.076,3.335,3.812c1.025,1.634,5.887,4.203,5.743,6.302c-4.084-0.117-14.774-6.314-17.383-1.821   c-3.245,5.589,3.6,19.429,5.482,24.371c3.483,9.146,12.586,26.011-4.029,26.322c-13.493,0.253-26.773,0.13-40.228-0.396   c-6.106-0.238-12.865,0.126-18.904-1.818c-4.467-1.438-5.733-6.385-9.727-7.884c-1.039-0.908-2.352-1.322-3.049-2.645   C6.809,66.826,7,64.123,5.275,63.45c0.442,0.107,0.885,0.214,1.327,0.321c-0.127-0.193-0.254-0.386-0.381-0.579   c1.979,0.286,3.947,0.691,5.872,1.235c3.466,0.979,3.03-0.923,6.447-1.032c-2.897-3.54-0.404-6.725,3.114-7.91   c-0.44,0.135-2.263,0.763-2.61,0.321c-0.353-0.448,3.269-2.217,2.786-1.962c-3.536-1.268,2.776-3.045,3.803-3.346   c-0.519,0.039-5.397,0.107-5.263-0.207c0.378-0.884,4.183-1.372,4.754-1.503c-4.057,0.71-3.838-3.25,1.099-2.67   c-1.252-3.627,3.32-1.804,5.062-1.461c2.68,0.528,5.927-0.628,8.417,1.039c0.426-2.917,5.83,0.214,7.045,1.551   c-0.604-0.494-1.146-1.065-1.731-1.582c5.683,2.217,11.78,6.801,16.639,10.507c5.077,3.872,10.197,11.933,16.421,13.673   C79.527,64.9,75.48,58.657,73.68,54.22z"/></g></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" x="0px" y="0px"><title>travel &amp;amp; hobby</title><path d="M15,2H9A5.0018,5.0018,0,0,0,4,7V17a3.01,3.01,0,0,0,1.827,2.7589l-.5341.5341A1,1,0,0,0,6.707,21.707L8.4141,20h7.1719l1.707,1.707A1,1,0,0,0,18.707,20.293l-.5341-.5341A3.01,3.01,0,0,0,20,17V7A5.0018,5.0018,0,0,0,15,2ZM8,17a1,1,0,1,1,1-1A1.003,1.003,0,0,1,8,17ZM7,11V7A2.0059,2.0059,0,0,1,9,5h6a2.0059,2.0059,0,0,1,2,2v4a2.0059,2.0059,0,0,1-2,2H9A2.0059,2.0059,0,0,1,7,11Zm9,6a1,1,0,1,1,1-1A1.003,1.003,0,0,1,16,17Z"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 95 118.75" enable-background="new 0 0 95 95" xml:space="preserve"><path d="M83.799,31.74c0-6.328-5.129-11.455-11.454-11.455c-0.978,0-1.921,0.135-2.828,0.365  c-0.778-5.859-5.783-10.383-11.855-10.383c-3.254,0-6.2,1.301-8.358,3.408c-1.447-3.822-5.13-6.545-9.458-6.545  c-5.59,0-10.121,4.531-10.121,10.121c0,0.758,0.09,1.494,0.249,2.205c-1.172-0.5-2.459-0.779-3.813-0.779  c-5.354,0-9.693,4.34-9.693,9.691c0,1.441,0.322,2.805,0.887,4.033c-3.598,1.402-6.152,4.891-6.152,8.984  c0,2.828,1.225,5.363,3.162,7.127c-0.475,1.324-0.746,2.744-0.746,4.23c0,6.928,5.615,12.545,12.543,12.545  c3.9,0,7.379-1.785,9.677-4.578c4.28,3.328,8.583,10.787,2.296,27.158h16.035c0,0-9.892-15.344,0.021-24  c1.956,2.826,5.193,4.697,8.89,4.697c5.984,0,10.835-4.85,10.835-10.832c0-0.521-0.05-1.031-0.12-1.531  c5.375-0.711,9.527-5.301,9.527-10.871c0-2.391-0.771-4.596-2.069-6.396C82.843,36.967,83.799,34.467,83.799,31.74z M37.177,58.672  c0.171-0.316,0.356-0.625,0.499-0.959c1.646-0.047,3.215-0.385,4.659-0.973c-0.324,0.926-0.528,1.982-0.496,3.188  C41.867,61.031,39.664,59.941,37.177,58.672z M44.958,58.463c1.147,0.631,2.398,1.092,3.728,1.34  c-0.357,0.484-0.729,1.01-1.146,1.623C44.831,65.434,44.61,62.186,44.958,58.463z M51.461,63.707  c-3.552,2.748-2.287-0.598-0.687-3.701c0.063,0,0.125,0.01,0.188,0.01c0.51,0,1.008-0.041,1.502-0.098  c0.177,0.869,0.492,1.682,0.865,2.461C52.752,62.754,52.134,63.186,51.461,63.707z"/></svg>',
        '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 80" x="0px" y="0px"><path d="M54,54.93A8,8,0,0,0,61,47a8,8,0,0,0-7,4.13v-8.2A8,8,0,0,0,61,35V31c-2,0-2,2-4,2s-2-2-4-2-2,2-4,2-2-2-4-2v4a8,8,0,0,0,7,7.93v6.2A8,8,0,0,0,45,45a8,8,0,0,0,7,7.93V60H33V33A12,12,0,0,0,44,21a12,12,0,0,0-11,7.21V20A10,10,0,0,0,42,10V2c-2.5,0-2.5,4-5,4s-2.5-4-5-4-2.5,4-5,4S24.5,2,22,2v8a10,10,0,0,0,9,10V30.21A12,12,0,0,0,20,23,12,12,0,0,0,31,35V60H12V56.93A8,8,0,0,0,19,49a8,8,0,0,0-7,4.13v-8.2A8,8,0,0,0,19,37V33c-2,0-2,2-4,2s-2-2-4-2-2,2-4,2-2-2-4-2v4a8,8,0,0,0,7,7.93v6.2A8,8,0,0,0,3,47a8,8,0,0,0,7,7.93V60H1v2H63V60H54ZM31,16a7,7,0,0,0,7-7h2a9,9,0,0,1-9,9Z"/></svg>',
    ];

    const gridStyle = `
    #salt-grid {
        max-width: 100%;
    }
    #salt-grid.row>.col {
        border: 1px solid rgba(86,61,124,.2);
    }
    #salt-grid.row>.col>svg {
        max-width: 100%;
        pointer-events: none;
    }
    #salt-grid.row {
        background-color: transparent;
        margin-right: 0px;
        margin-left: 0px;
    
        transition: background-color 0.5s linear; 
        -moz-transition: background-color 0.5s linear;  
        -webkit-transition: background-color 0.5s linear; 
        -ms-transition: background-color 0.5s linear; 
    }
    #salt-grid.row.complete {
        background-color: green;
    }
    .top-left, .top-right, .bottom-left, .bottom-right {
        position: absolute;
        color: #fff;
        text-shadow: 2px 0 0 #000, 0 -2px 0 #000, 0 2px 0 #000, -2px 0 0 #000;
        font-size: 2em;
        pointer-events: none;
    }
    .top-left {
        top: 0px;
        left: 1em;
    }
    .top-right {
        top: 0px;
        right: 1em;
    }
    .bottom-left {
        bottom: 0px;
        left: 1em;
    }
    .bottom-right {
        bottom: 0px;
        right: 1em;
    }
    `;
            
    const gridId = 'salt-grid';
    const colIdPrefix = 'salt-col-';
    const event = new Event('complete');

    var selected = [];
    var indicators = [];

    function addStyle() {
        const style = document.createElement('style');
        style.textContent = gridStyle;
        document.head.append(style);
    }

    function fromBase64(v) {
        var binary = window.atob(v);
        var len = binary.length;
        var b = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            b[i] = binary.charCodeAt(i);
        }
        fromByteArray(b)
    }

    function fromByteArray(b) {
        var n1 = b[0]>>4
        var n2 = b[0]&0xF
        var n3 = b[1]>>4
        var n4 = b[1]&0xF
    
        selected = [n1, n2, n3, n4]
    }

    function stringValue() {
        var binary = "";
        var v = byteValue();
        if (v == undefined) {
            return '';
        }
        var len = v.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(v[i]);
        }
        return btoa(binary).replace(/\=/, '');
    }

    function byteValue() {
        if(selected.length == 4){
            var b1 = (selected[0] << 4) | selected[1];
            var b2 = (selected[2] << 4) | selected[3];

            return new Uint8Array([b1, b2]);
        }
    }

    function displayValue() {
        return selected.join('-');
    }

    function onComplete(callBack) {
        element.addEventListener('complete', function(e) {
            if (typeof callBack == 'function') {
                callBack();
            }
        })
    }

    function complete() {
        var grid = document.getElementById(gridId);
        grid.classList.add('complete');
        element.dispatchEvent(event);
    }

    function reset(callBack) {
        var grid = document.getElementById(gridId);
        grid.classList.remove('complete');
        selected = [];
        indicators.forEach(i => {
            i.parentNode.removeChild(i);
        });
        indicators = [];
        if (typeof callBack == 'function') {
            callBack();
        }
    }

    function getIndicatorClass(value){
        switch (value) {
            case 1:
                return "top-left";
            case 2:
                return "top-right";
            case 3:
                return "bottom-left";
            case 4:
                return "bottom-right";
            default:
                throw `Invalid value: ${value}`;
        }
    }

    function updateIndicator(value, item) {
        var element = document.getElementById(colIdPrefix + value);
        
        var indicator = document.createElement('div');
        indicator.classList.add(getIndicatorClass(item));
        indicator.innerHTML = item;
        
        indicators.push(indicator);
        element.appendChild(indicator);
    }

    function add(event) {
        event.stopPropagation();
        var value = parseInt(event.target.getAttribute("data-value"));
        
        if (selected.length < 4) {
            selected.push(value);
            updateIndicator(value, selected.length);
        }

        if (selected.length == 4){
            complete();
        }
    }

    async function salt() {
        var txt = `<div id="${gridId}" class="row">`;
        for (var i = 0; i < images.length; i++) {
            var image = images[i];
            txt += `<div id="${colIdPrefix + i}" class="col" data-value="${i}" style="z-index: 1;">${image}</div>`;
            if ((i + 1) % 4 == 0) {
                txt += '<div class="w-100"></div>';
            }
        }
        element.innerHTML = txt;
        for (var i = 0; i < 16; i++) {
            document.getElementById(colIdPrefix + i)
                .addEventListener('click', add);
        }
    }

    function init() {
        if (initValue) {
            if (typeof initValue == 'string') {
                fromBase64(initValue)
            } else if (typeof initValue == 'object' &&
                initValue.constructor === Uint8Array) {
                fromByteArray(initValue)
            } else {
                throw `initValue type of '${typeof initValue}' not supported.`;
            }

            if (selected.length == 4) {
                for(i = 0; i < selected.length; i++){
                    updateIndicator(selected[i], i+1);
                }
                complete();
            }
        }
    }

    //#region public methods and getters

    Object.defineProperty(this, 'displayValue', { 
        get: function() { return displayValue(); } 
    });

    Object.defineProperty(this, 'byteValue', { 
        get: function() { return byteValue(); } 
    });

    Object.defineProperty(this, 'stringValue', { 
        get: function() { return stringValue(); } 
    });
    
    this.reset = function (callBack) {
        reset(callBack);
    }

    this.onComplete = function(callBack) {
        onComplete(callBack);
    }

    //#endregion

    // generate grid;
    addStyle();
    salt();
    init();

}
# Palabras Encadenadas

Trabajo Final Integrador de la materia **Interfaces de Usuario** (UNQ).

## Descripción

Palabras Encadenadas es un juego desarrollado en React donde el objetivo es formar la cadena más larga posible de palabras válidas antes de que el tiempo se agote.

Cada nueva palabra debe cumplir las siguientes reglas:

* Existir en el diccionario español.
* No haber sido utilizada anteriormente.
* Comenzar con la última letra de la palabra válida anterior.

El juego valida cada palabra utilizando la API provista por la cátedra.

## Características

* Inicio de partida con nombre del jugador.
* Validación de palabras mediante API.
* Sistema de puntaje basado en la cantidad de letras.
* Temporizador que se reinicia al ingresar una palabra válida.
* Mensajes de error para palabras inválidas.
* Pantalla de fin de partida con estadísticas.
* Leaderboard local con los 10 mejores puntajes.

## Tecnologías utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Pichu224/unq-ui-alan-acuna-trabajo-final.git
```

Ingresar al proyecto:

```bash
cd unq-ui-alan-acuna-trabajo-final
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

## Estructura del proyecto

```text
src/
├── components/
├── hooks/
├── pages/
├── services/
├── types/
├── utils/
└── views/
```

## Funcionalidades implementadas

* Juego completo de Palabras Encadenadas.
* Validación de palabras mediante API.
* Puntaje acumulado.
* Temporizador de 15 segundos.
* Reinicio del temporizador al ingresar una palabra válida.
* Detección de fin de partida.
* Posibilidad de jugar múltiples partidas.
* Leaderboard local (Top 10).

## Autor

Alan Acuña

Trabajo Final Integrador – Interfaces de Usuario

Universidad Nacional de Quilmes

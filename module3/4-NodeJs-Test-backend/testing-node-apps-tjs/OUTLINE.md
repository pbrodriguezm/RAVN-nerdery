# Testing Node.js Apps

> Let's make our backends Rock Solid πΏπͺ

π I'm Kent C. Dodds

- π‘ Utah
- π© π§ π¦ π¦ π¦ π
- π’ kentcdodds.com
- π¦/π @kentcdodds
- π testingjavascript.com
- π₯ kcd.im/egghead
- π₯ kcd.im/fem
- π kcd.im/news
- π kcd.im/blog
- πΊ kcd.im/devtips
- π» kcd.im/coding
- π½ kcd.im/youtube
- π kcd.im/3-mins
- β kcd.im/ama

# What this workshop is

- Lots of exercises

# What this workshop is not

- Solo
- Lecture

# Logistics

## Schedule

- π΄ Logistics
- π Testing Pure Functions
- π΄ 10 Minutes
- π Testing Middleware
- π΄ 30 Minutes
- π Testing Controllers
- π΄ 10 Minutes
- π Testing Authentication API Routes
- π΄ 10 Minutes
- π Testing CRUD API Routes
- β Q&A

## Scripts

- `npm run test`

## Asking Questions

Please do ask! Interrupt me. If you have an unrelated question, please ask on
[my AMA](https://kcd.im/ama).

## Zoom

- Help us make this more human by keeping your video on if possible
- Keep microphone muted unless speaking
- Breakout rooms

## App Intro

### App Demo

This is the backend for [Bookshelf](https://the-react-bookshelf.netlify.com/). I
recommend you play around with it a little bit to get an idea of the kind of
data we're dealing with here.

### Data Model

- User

  - id: string
  - username: string

- List Item

  - id: string
  - bookId: string
  - ownerId: string
  - rating: number (-1 is no rating, otherwise it's 1-5)
  - notes: string
  - startDate: number (`Date.now()`)
  - finishDate: number (`Date.now()`)

> For convenience, our we return a `book` object on each list item which is the
> book it's associated to. You're welcome frontend folks!

> /me wishes we could use GraphQL

- Book

  - id: string
  - title: string
  - author: string
  - coverImageUrl: string
  - pageCount: number
  - publisher: string
  - synopsis: string

## Emoji

- **Kody the Koala Bear** π¨ "Do this"
- **Marty the Money Bag** π° "Here's a hint"
- **Hannah the Hundred** π― "Extra Credit"
- **Olivia the Owl** π¦ "Pro-tip"
- **Dominic the Document** π "Docs links"
- **Berry the Bomb** π£ "Remove this code"
- **Alfred the Alert** π¨ "Extra helpful in test errors"

## Exercises

Here are the kinds of files you'll be working with:

- `src/**/__tests__/[title].md`: Background, Exercise Instructions, Extra Credit
- `src/**/__tests__/[title].exercise.js`: Exercise with Emoji helpers
- `src/**/__tests__/[title].final.js`: Final version
- `src/**/__tests__/[title].final.extra-#.js`: Final version of extra credit
- `src/**/[title].js`: The source file that you'll be testing

Here's the order of exercises we'll be doing as well as where you can find the
markdown file associated with each.

1.  π Testing Pure Functions: `src/utils/__tests__/auth.md`
2.  π Testing Middleware: `src/utils/__tests__/error-middleware.md`
3.  π Testing Controllers: `src/routes/__tests__/list-items-controller.md`
4.  π Testing Authentication API Routes: `src/__tests__/auth.md`
5.  π Testing CRUD API Routes: `src/__tests__/list-items.md`

## Workshop Feedback

Each exercise has an Elaboration and Feedback link. Please fill that out after
the exercise and instruction.

At the end of the workshop, please go to this URL to give overall feedback.
Thank you! https://kcd.im/tna-ws-feedback

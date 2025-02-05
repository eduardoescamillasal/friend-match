This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# friend-match

# User

```plantuml
@startuml
    skinparam backgroundColor #EEEBDC
    skinparam handwritten true



class Account {
  +id: String
  +userId: String
  +type: String
  +provider: String
  +providerAccountId: String
  +refresh_token: String?
  +access_token: String?
  +expires_at: Int?
  +token_type: String?
  +scope: String?
  +id_token: String?
  +session_state: String?
  +createdAt: DateTime
  +updatedAt: DateTime
}

class User {
  +id: String
  +name: String?
  +email: String?
  +emailVerified: DateTime?
  +passwordHash: String
  +image: String?
}

class Member {
  +id: String
  +userId: String
  +name: String
  +gender: String
  +dateOfBirth: DateTime
  +created: DateTime
  +updated: DateTime
  +description: String
  +city: String
  +country: String
  +image: String?
}

class Photo {
  +id: String
  +url: String
  +publicId: String?
  +memberId: String
}

class Like {
  +sourceUserId: String
  +targetUserId: String
}

User "1" -- "*" Account : has
User "1" -- "0..1" Member : has

Member "1" -- "*" Photo : has
Member "1" -- "*" Like : "sourceLikes"
Member "1" -- "*" Like : "targetLikes"

Account "*" -- "1" User : belongs_to
Member "1" -- "1" User : belongs_to
Photo "*" -- "1" Member : belongs_to
Like "*" -- "1" Member : "sourceMember"
Like "*" -- "1" Member : "targetMember"

@enduml
```

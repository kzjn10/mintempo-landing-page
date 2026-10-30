# Mintempo website design

Status: ready for owner review before implementation.

## Intent and decisions

Replace the unrelated Puzzle Party website with an accurate Mintempo product preview, using the sibling `exchange` app repository as the source of truth. The owner selected English copy and a gallery-first layout. Retain the requested Montserrat website font (the app itself uses Google Sans). Keep the existing Next.js project and localhost workflow.

## Approaches

1. Feature-led editorial layout: explains the three product pillars before a larger gallery; clear for first-time visitors, less emphasis on supplied artwork.
2. Gallery-first layout: puts authentic product artwork immediately after a compact introduction; more visual, with explanations following. **Selected by the owner.** Preserve full poster proportions and avoid repeating their baked-in headlines verbatim in adjacent copy.

## Visual design and page structure

- Navy background `#0E171E`, surface `#142A35`, mint `#78D8C8`, near-white `#F4F8FA`, muted text `#B2C2CD`. Use the production rounded-M/orbit symbol.
- Header: Mintempo brand, Preview, Features, Widgets, FAQ. Mobile navigation must remain usable without overflow.
- Compact hero: “Your day, at a glance.” Explain weather, everyday conversions and world clocks in one place. Show “In development for iOS & Android.” Primary link: “Explore the app” to the gallery.
- Main gallery: five authentic English iPhone posters for Weather, Convert, Clocks, Light appearance and Widgets. Horizontal, manually scrollable strip on small screens with visible adjacent content; clear captions and accessible previous/next controls if added. No autoplay. Desktop uses a generous gallery composition with readable images. Never crop off poster headlines or embed already-framed posters in another phone frame.
- Feature overview: simultaneous °C/°F, saved temperature/weight/length/pressure conversions, clock groups of up to four cities with local dates and DST-aware time zones.
- Widgets section: native iOS/Android widgets with independently selected saved cards; authentic widget graphic and source/platform caption. Use an Android graphic if illustrating Android specifically.
- Practical details: light/dark/system appearance, nine app languages, manual cities without GPS permission; saved clocks/conversions offline and weather cache clearly distinguished.
- FAQ: release availability, supported conversions, offline behavior, widget setup. Honest pre-release closing panel and footer.
- Screenshots show sample/capture-time data. No live-data implication, ratings, testimonials, price promises or download links without actual release URLs.

## Supporting routes and data handling

`/privacy` and `/terms` retain their URLs and `?p=mobile` embedded behavior. Owner supplied Firebase project `test-3d1e8a23` and confirmed Firestore document `pages/mintampo`, with HTML fields `privacy` and `terms`. Keep the exact document spelling even though the public app brand is Mintempo. Load those approved owner-managed documents, with loading/missing/error states; do not replace them with pre-release notices. Do not fabricate a last-updated date.

The owner supplied replacement Firebase configuration for the website, including its contact handler. Use a shared configuration and named app to avoid stale default-app reuse during hot reload. Remove the old Analytics setup because no measurement ID was supplied. Preserve contact functionality using the new project; do not submit test messages or modify Firestore records. Confirm any support address separately before publishing it.

## Asset sources

Source root: `/Volumes/Data/04_FlutterProjects/exchange/exchange` (read only).

- `README.md`: name, capabilities, release status and limitations.
- `store/README.md` and `store/manifest.json`: provenance and dimensions.
- `assets/branding/source/mintempo-symbol.svg`: production symbol.
- `store/ios/common/icon-1024.png`: icon/favicon source.
- `store/ios/iphone-6.9/en/01-weather.png` through `05-widgets.png`: main gallery.
- `store/android/common/en/feature-graphic-1024x500.png`: social preview.
- `store/android/phone/en/05-widgets.png`: Android widget artwork if needed.

Copy selected assets to the website, retaining source provenance. Produce sensibly sized WebP derivatives for browser delivery using existing Sharp; do not modify source artwork. No new image generation or dependencies required.

## Scope and ownership

PM validates product claims and acceptance criteria; UI/UX owns hierarchy, visual direction and visual review; Dev implements website files; QA/Tester checks desktop/mobile, routes and interactions. Primary agent coordinates integration. Source app code and store artwork remain unchanged. No deployment, external messages, analytics migration, app feature work or release publishing.

## Acceptance criteria

1. Mintempo appears consistently in title, metadata, logo, favicon, body, footer and supporting pages; no rendered Puzzle Party remnants.
2. All marketed features and release status match source evidence; analytics/advertising in app source means no “tracking-free” claim.
3. Five real gallery images load with correct proportions and useful alt text; all assets are served locally.
4. At 375, 768 and 1440 pixels, no page overflow, clipped headlines or unusable navigation; gallery scroll is deliberate and contained.
5. Keyboard navigation, visible focus, semantic headings, reduced-motion handling and meaningful anchors work.
6. All three routes and embedded legal variants work without old Firebase requests. Contact uses the new project only; no real submissions are made during testing.
7. Montserrat remains the computed site font. Build, independent TypeScript check and browser review are recorded honestly; unrelated baseline failures are distinguished.

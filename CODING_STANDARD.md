# Our Coding Standard

1. Naming (matches your diagrams)

1.1. Classes use PascalCase: EventService, ClashChecker.
1.2. Functions and variables use camelCase: checkClash, venueId.
1.3. Booleans start with is or has: hasClash, isFull.
1.4. Constants use UPPER_SNAKE_CASE: PENDING_APPROVAL.
1.5. Database tables and columns use snake_case: saved_event, start_time.
1.6. Use the same names as your sequence and class diagrams, so the code and the report agree.

2. Formatting

2.1. Use one auto-formatter and one linter, with the config files committed to the repo. Nobody formats by hand or argues about style.
2.2. Line length is 100 characters at most.
2.3. Use consistent indentation (2 or 4 spaces, as the formatter sets it) and never mix tabs and spaces.

3. Structure

3.1. Follow your layers: view, then controller, then model. Views never touch the database, and business rules like clash checking live in the model.
3.2. One class or function does one job. Keep functions under about 30 lines and split anything longer.
3.3. No copy-pasted code. If you paste something twice, make it a function.

4. Comments

4.1. Explain why something is done, not what the code does.
4.2. Every public function gets a one-line description of its inputs and what it returns.
4.3. No commented-out code, and write TODOs as TODO(Ahmed): ... with a name.

5. Errors and security

5.1. Validate all input on the server, not only in the form.
5.2. Never put passwords or keys in the code. Use a .env file and add it to .gitignore.
5.3. Hash passwords, and check the user’s role before any organizer or admin action (US-01 AC2).
5.4. Show clear error messages that match your acceptance criteria, like “Venue already booked”.

6. Git workflow (this supports risks R5 and R9)

6.1. Nobody pushes straight to main. Work on branches named like feature/US-06-create-event.
6.2. Make small, frequent commits with messages like US-06: add clash check on event create.
6.3. Every pull request needs a review from one other member before it’s merged. Ibrahim, as repository keeper, does the merge.
6.4. Pull from main every day to avoid big merge conflicts.

7. Testing and “done”

7.1. A task is done when it runs, the linter is clean, there’s at least one test per acceptance criterion, and the pull request is reviewed.
7.2. Alan, as quality lead, checks the list before a sprint review.
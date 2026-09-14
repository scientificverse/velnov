/* ============================================================
   SQL - TOPIC 10: DATE & TIME FUNCTIONS (30 questions)
   ============================================================ */

window.QUIZ_DATA = window.QUIZ_DATA || [];

QUIZ_DATA.push({
  subject: "SQL",
  icon: "🗄️",
  color: "#0f80cc",
  description: "Databases from basics to window functions - 20 topics.",
  topics: [
    {
      name: "10. Date & Time Functions",
      questions: [
        {
          difficulty: "easy",
          question: "Which function returns the current date and time?",
          options: {
            A: "NOW() (or CURRENT_TIMESTAMP)",
            B: "TODAY()",
            C: "DATE()",
            D: "TIME.NOW"
          },
          answer: "A",
          explanation: "NOW() and CURRENT_TIMESTAMP return the current moment. CURRENT_DATE gives just the date, and CURRENT_TIME just the clock. (SQL Server uses GETDATE().)",
          code: "SELECT NOW();   -- 2026-07-04 14:30:05",
          related: ["NOW", "CURRENT_TIMESTAMP"]
        },
        {
          difficulty: "easy",
          question: "What is the standard SQL date format?",
          options: {
            A: "'YYYY-MM-DD' - year, month, day",
            B: "'DD-MM-YYYY'",
            C: "'MM/DD/YYYY'",
            D: "'DD/MM/YY'"
          },
          answer: "A",
          explanation: "ISO 8601 format 'YYYY-MM-DD' is unambiguous and sorts correctly as text. Always use it in queries to avoid locale confusion between month and day.",
          code: "WHERE order_date = '2026-07-04';",
          related: ["ISO 8601", "Date format"]
        },
        {
          difficulty: "medium",
          question: "How do you extract just the YEAR from a date?",
          options: {
            A: "EXTRACT(YEAR FROM order_date)  or  YEAR(order_date)",
            B: "GET_YEAR(order_date)",
            C: "order_date.year",
            D: "DATEYEAR(order_date)"
          },
          answer: "A",
          explanation: "EXTRACT is standard SQL; MySQL and SQL Server also have YEAR(), MONTH(), DAY() shortcuts. EXTRACT(DOW FROM d) even gives the day of week.",
          code: "SELECT EXTRACT(YEAR FROM order_date), EXTRACT(MONTH FROM order_date);",
          related: ["EXTRACT", "YEAR"]
        },
        {
          difficulty: "medium",
          question: "How do you add 7 days to a date?",
          options: {
            A: "order_date + INTERVAL '7 days'  or  DATE_ADD(order_date, INTERVAL 7 DAY)",
            B: "order_date + 7 (always works)",
            C: "ADD_DAYS(order_date, 7)",
            D: "order_date.plus(7)"
          },
          answer: "A",
          explanation: "PostgreSQL/Oracle use INTERVAL; MySQL uses DATE_ADD; SQL Server uses DATEADD(DAY, 7, order_date). Plain + 7 works on DATE in some databases but is not portable.",
          code: "SELECT order_date + INTERVAL '7 days' AS due_date FROM orders;",
          related: ["DATE_ADD", "INTERVAL"]
        },
        {
          difficulty: "medium",
          question: "How do you find the number of days between two dates?",
          options: {
            A: "DATEDIFF(end_date, start_date)  or  end_date - start_date",
            B: "DAYS_BETWEEN only",
            C: "SUBTRACT(end, start)",
            D: "end.minus(start)"
          },
          answer: "A",
          explanation: "In PostgreSQL, subtracting two DATEs gives an integer number of days. MySQL uses DATEDIFF(end, start); SQL Server uses DATEDIFF(DAY, start, end) - note the argument order differs.",
          code: "SELECT DATEDIFF(delivered_at, ordered_at) AS days_to_deliver FROM orders;",
          related: ["DATEDIFF", "Date arithmetic"]
        },
        {
          difficulty: "hard",
          question: "Why does 'WHERE order_date = '2026-07-04'' sometimes miss rows?",
          options: {
            A: "If the column stores a time too, only rows at exactly midnight match; use a date range instead",
            B: "The date format is wrong",
            C: "Dates cannot be compared with =",
            D: "It never misses rows"
          },
          answer: "A",
          explanation: "A DATETIME of 2026-07-04 14:30 is not equal to 2026-07-04 00:00. Use a half-open range: order_date >= '2026-07-04' AND order_date < '2026-07-05'.",
          notes: ["One of the most common real-world SQL bugs."],
          related: ["DATETIME", "Ranges", "Gotchas"]
        },
        {
          difficulty: "medium",
          question: "How do you get the first day of the current month?",
          options: {
            A: "DATE_TRUNC('month', CURRENT_DATE) in PostgreSQL",
            B: "MONTH_START()",
            C: "FIRST_DAY()",
            D: "CURRENT_DATE - 30"
          },
          answer: "A",
          explanation: "DATE_TRUNC rounds a date down to a unit (month, year, hour). It is the cleanest way to bucket timestamps for reporting. MySQL uses DATE_FORMAT or arithmetic.",
          code: "SELECT DATE_TRUNC('month', order_date) AS month, COUNT(*)\nFROM orders GROUP BY 1;",
          related: ["DATE_TRUNC", "Reporting"]
        },
        {
          difficulty: "hard",
          question: "How do you group sales by month correctly across multiple years?",
          options: {
            A: "GROUP BY DATE_TRUNC('month', sale_date) - keeps year and month together",
            B: "GROUP BY MONTH(sale_date) - merges same months across years",
            C: "GROUP BY sale_date",
            D: "GROUP BY YEAR(sale_date) only"
          },
          answer: "A",
          explanation: "GROUP BY MONTH() alone would merge January 2025 and January 2026 into one bucket. DATE_TRUNC (or grouping by both YEAR and MONTH) keeps them separate.",
          related: ["DATE_TRUNC", "GROUP BY"]
        },
        {
          difficulty: "medium",
          question: "How do you extract the day of the week?",
          options: {
            A: "EXTRACT(DOW FROM date) or DAYOFWEEK(date) - returns a number for the weekday",
            B: "WEEKDAY_NAME(date)",
            C: "DAY(date)",
            D: "There is no way"
          },
          answer: "A",
          explanation: "Beware the numbering differs: PostgreSQL DOW is 0=Sunday, MySQL DAYOFWEEK is 1=Sunday, and ISODOW is 1=Monday. Check your database before filtering on weekdays.",
          related: ["Day of week", "EXTRACT"]
        },
        {
          difficulty: "medium",
          question: "What does DATE(order_datetime) return?",
          options: {
            A: "The date portion only, dropping the time",
            B: "The full timestamp",
            C: "Just the year",
            D: "An error"
          },
          answer: "A",
          explanation: "Casting a DATETIME to DATE (via DATE() or CAST(x AS DATE)) strips the time - handy for grouping all of a day's events together.",
          code: "SELECT DATE(created_at) AS day, COUNT(*) FROM events GROUP BY 1;",
          related: ["DATE", "CAST"]
        },
        {
          difficulty: "hard",
          question: "Why is storing timestamps in UTC recommended?",
          options: {
            A: "It avoids ambiguity across timezones and daylight-saving changes; convert to local time only for display",
            B: "UTC is faster to store",
            C: "Local time never changes",
            D: "It uses less space"
          },
          answer: "A",
          explanation: "Storing local times means a value can be ambiguous (a clock hour can occur twice) or missing (during a spring-forward). UTC is a single monotonic reference; format it per-user at display time.",
          related: ["UTC", "Timezones", "Best practices"]
        },
        {
          difficulty: "medium",
          question: "How do you calculate age in years from a birthdate?",
          options: {
            A: "AGE(birthdate) in PostgreSQL, or DATEDIFF-based arithmetic elsewhere",
            B: "birthdate - NOW()",
            C: "YEARS(birthdate)",
            D: "birthdate.age()"
          },
          answer: "A",
          explanation: "PostgreSQL's AGE() returns an interval; extract the years. Elsewhere: FLOOR(DATEDIFF(NOW(), birthdate) / 365.25), being careful about leap years and exact birthdays.",
          related: ["AGE", "DATEDIFF"]
        },
        {
          difficulty: "medium",
          question: "How do you filter for records from the last 30 days?",
          options: {
            A: "WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'",
            B: "WHERE created_at = LAST_30_DAYS",
            C: "WHERE created_at IN (30 days)",
            D: "WHERE RECENT(created_at, 30)"
          },
          answer: "A",
          explanation: "Compute the cutoff by subtracting an interval from today, then compare. Keeping the function on the constant side (not the column) lets the index on created_at work.",
          code: "WHERE created_at >= NOW() - INTERVAL '30 days';",
          related: ["INTERVAL", "Date ranges"]
        },
        {
          difficulty: "hard",
          question: "Why avoid WHERE YEAR(order_date) = 2026 on a large table?",
          options: {
            A: "The function on the column blocks index usage; use a date range instead",
            B: "YEAR() is inaccurate",
            C: "It returns duplicates",
            D: "There is no downside"
          },
          answer: "A",
          explanation: "Rewrite as order_date >= '2026-01-01' AND order_date < '2027-01-01'. The range compares the raw column, so an index can seek directly to the matching rows.",
          related: ["Sargability", "Indexes"]
        },
        {
          difficulty: "medium",
          question: "How do you format a date as 'July 04, 2026'?",
          options: {
            A: "TO_CHAR(order_date, 'Month DD, YYYY') in PostgreSQL/Oracle",
            B: "FORMAT(order_date)",
            C: "STRING(order_date)",
            D: "Dates cannot be formatted"
          },
          answer: "A",
          explanation: "TO_CHAR with a format model handles custom display. MySQL uses DATE_FORMAT(date, '%M %d, %Y'); SQL Server uses FORMAT(). Prefer formatting in the app layer where possible.",
          related: ["TO_CHAR", "DATE_FORMAT"]
        },
        {
          difficulty: "hard",
          question: "What is the difference between TIMESTAMP and TIMESTAMPTZ (PostgreSQL)?",
          options: {
            A: "TIMESTAMPTZ is timezone-aware and stores an absolute instant; TIMESTAMP stores a 'wall clock' with no zone",
            B: "They are identical",
            C: "TIMESTAMPTZ cannot store time",
            D: "TIMESTAMP is newer"
          },
          answer: "A",
          explanation: "TIMESTAMPTZ converts input to UTC on storage and back to the session zone on display. For anything user-facing across regions, TIMESTAMPTZ is usually the right choice.",
          related: ["TIMESTAMPTZ", "Timezones"]
        },
        {
          difficulty: "medium",
          question: "How do you get yesterday's date?",
          options: {
            A: "CURRENT_DATE - INTERVAL '1 day'  (or CURRENT_DATE - 1 in some databases)",
            B: "YESTERDAY()",
            C: "NOW() - 1",
            D: "PREVIOUS(CURRENT_DATE)"
          },
          answer: "A",
          explanation: "Subtracting an interval is the portable form. In PostgreSQL and MySQL, CURRENT_DATE - 1 also works because a DATE minus an integer subtracts days.",
          related: ["INTERVAL", "Date arithmetic"]
        },
        {
          difficulty: "hard",
          question: "How do you find records created 'today' regardless of time?",
          options: {
            A: "WHERE created_at >= CURRENT_DATE AND created_at < CURRENT_DATE + INTERVAL '1 day'",
            B: "WHERE created_at = CURRENT_DATE",
            C: "WHERE DATE(created_at) = TODAY",
            D: "WHERE created_at LIKE '%today%'"
          },
          answer: "A",
          explanation: "The half-open range captures every moment of today while keeping the index usable. Option B fails because a timestamped value rarely equals midnight exactly.",
          related: ["Date ranges", "CURRENT_DATE"]
        },
        {
          difficulty: "medium",
          question: "What does EXTRACT(EPOCH FROM interval) give in PostgreSQL?",
          options: {
            A: "The interval expressed in total SECONDS",
            B: "The year",
            C: "The month name",
            D: "An error"
          },
          answer: "A",
          explanation: "EPOCH converts an interval or timestamp to seconds - useful for computing precise durations like average response time: EXTRACT(EPOCH FROM (ended - started)).",
          related: ["EPOCH", "Duration"]
        },
        {
          difficulty: "medium",
          question: "How do you get the last day of a month?",
          options: {
            A: "LAST_DAY(date) in MySQL/Oracle, or date-arithmetic with DATE_TRUNC in PostgreSQL",
            B: "MONTH_END(date)",
            C: "date + 30",
            D: "FINAL_DAY(date)"
          },
          answer: "A",
          explanation: "LAST_DAY handles varying month lengths and leap years automatically. In PostgreSQL: (DATE_TRUNC('month', d) + INTERVAL '1 month - 1 day').",
          related: ["LAST_DAY", "Month boundaries"]
        },
        {
          difficulty: "hard",
          question: "What can go wrong comparing a DATE column to a string literal?",
          options: {
            A: "Implicit conversion depends on locale/format settings and can misread the date or block the index",
            B: "Nothing ever goes wrong",
            C: "It always errors",
            D: "Strings are always faster"
          },
          answer: "A",
          explanation: "Always use ISO format 'YYYY-MM-DD', which every database interprets unambiguously. Ambiguous forms like '04/07/2026' may be read as April 7 or July 4.",
          related: ["Implicit conversion", "ISO 8601"]
        },
        {
          difficulty: "medium",
          question: "How would you count orders per weekday name?",
          options: {
            A: "GROUP BY the weekday using TO_CHAR(date, 'Day') or DAYNAME(date)",
            B: "GROUP BY date",
            C: "GROUP BY hour",
            D: "It cannot be done"
          },
          answer: "A",
          explanation: "Extract the weekday name (or number) and group by it. To order Monday-Sunday correctly, group by the numeric day of week and format the label separately.",
          code: "SELECT TO_CHAR(order_date, 'Day') AS weekday, COUNT(*)\nFROM orders GROUP BY 1;",
          related: ["Weekday", "GROUP BY"]
        },
        {
          difficulty: "hard",
          question: "How do you compute a running date range for 'this quarter'?",
          options: {
            A: "DATE_TRUNC('quarter', CURRENT_DATE) for the start, plus INTERVAL '3 months' for the end",
            B: "QUARTER(CURRENT_DATE)",
            C: "CURRENT_DATE / 4",
            D: "It is impossible"
          },
          answer: "A",
          explanation: "DATE_TRUNC supports 'quarter', giving the first day of the current quarter. Add three months for a clean half-open upper bound.",
          related: ["DATE_TRUNC", "Quarters"]
        },
        {
          difficulty: "medium",
          question: "What does DATE_TRUNC('hour', ts) do?",
          options: {
            A: "Rounds the timestamp DOWN to the start of the hour (minutes and seconds become 0)",
            B: "Rounds to the nearest hour",
            C: "Returns the hour number only",
            D: "Adds an hour"
          },
          answer: "A",
          explanation: "Truncation always rounds down, making it perfect for bucketing events into hourly (or minutely) intervals for time-series charts.",
          related: ["DATE_TRUNC", "Time series"]
        },
        {
          difficulty: "hard",
          question: "Why can date arithmetic across daylight-saving boundaries surprise you?",
          options: {
            A: "Adding '1 day' vs '24 hours' can differ, because a DST day has 23 or 25 hours",
            B: "Dates never change length",
            C: "SQL ignores DST always",
            D: "It only affects leap years"
          },
          answer: "A",
          explanation: "With timezone-aware types, '+ INTERVAL 1 day' keeps the same wall-clock time, while '+ INTERVAL 24 hours' adds exactly 24 hours. Know which you need for scheduling.",
          related: ["DST", "Timezones"]
        },
        {
          difficulty: "medium",
          question: "How do you extract the hour from a timestamp?",
          options: {
            A: "EXTRACT(HOUR FROM ts) or HOUR(ts)",
            B: "ts.hour",
            C: "GET_HOUR(ts)",
            D: "TIMEPART(ts)"
          },
          answer: "A",
          explanation: "Extracting the hour is common for finding peak-traffic times: GROUP BY EXTRACT(HOUR FROM created_at) to see activity by hour of day.",
          related: ["EXTRACT", "HOUR"]
        },
        {
          difficulty: "hard",
          question: "What is a common way to store dates that avoids timezone issues entirely?",
          options: {
            A: "Use a plain DATE type when time-of-day is irrelevant (e.g. a birthday or invoice date)",
            B: "Always store as text",
            C: "Store as an integer offset",
            D: "Never store dates"
          },
          answer: "A",
          explanation: "A birthday has no meaningful time or timezone, so a DATE is correct and simplest. Reserve timezone-aware timestamps for genuine instants like 'order placed at'.",
          related: ["DATE", "Modelling"]
        },
        {
          difficulty: "medium",
          question: "How do you find records from the current year?",
          options: {
            A: "WHERE order_date >= DATE_TRUNC('year', CURRENT_DATE)",
            B: "WHERE YEAR(order_date) = THIS_YEAR",
            C: "WHERE order_date = 2026",
            D: "WHERE order_date CONTAINS 2026"
          },
          answer: "A",
          explanation: "Truncating today's date to the year gives January 1st, and comparing with >= keeps the index usable - better than wrapping the column in YEAR().",
          related: ["DATE_TRUNC", "Sargability"]
        },
        {
          difficulty: "hard",
          question: "How do you calculate business days between two dates?",
          options: {
            A: "There is no built-in function - you count days and subtract weekends (and holidays) with a calendar table or a generated series",
            B: "BUSINESS_DAYS(a, b)",
            C: "DATEDIFF handles it automatically",
            D: "It is impossible in SQL"
          },
          answer: "A",
          explanation: "Most databases lack a business-day function. The robust approach is a 'calendar' or 'dim_date' table flagging weekends and holidays, then joining and counting working days.",
          related: ["Calendar table", "Business days"]
        },
        {
          difficulty: "medium",
          question: "Which is the safest, most portable literal for a specific date-time?",
          options: {
            A: "'2026-07-04 14:30:00' - ISO format, understood everywhere",
            B: "'July 4 2026 2:30pm'",
            C: "'04-07-26'",
            D: "'7/4/26 14:30'"
          },
          answer: "A",
          explanation: "ISO 8601 (YYYY-MM-DD HH:MM:SS) is unambiguous and sorts correctly. The other formats depend on locale settings and are a frequent source of silent misreads.",
          related: ["ISO 8601", "Literals"]
        }
      ]
    }
  ]
});

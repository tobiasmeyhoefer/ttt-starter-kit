1. Create a Supabase project
2. Type this in theSQL Editor:
   `-- Create the table
   create table notes (
   id bigint primary key generated always as identity,
   title text not null
   );

-- Insert some sample data into the table
insert into notes (title)
values
('Today I created a Supabase project.'),
('I added some data and queried it from Next.js.'),
('It was awesome!');

alter table notes enable row level security;` 
3. Clone this Project 
4. change naming from .emv.example to .env.local and add keys
5. run npm run dev

create a

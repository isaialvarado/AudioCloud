# DB Schema


## USER TABLE
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary
username    | char field| not null, unique
password    | char field| not null


## TRACKS
column name | data type  | details
------------|------------|-----------------------
id          | integer    | not null, primary key
user_id     | foreign key |
title       | char field | not null
track_url   | char field | not null
description | text field |
img_url     | char field |

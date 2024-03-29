# File format

The `enassi` file format is a bit like the [ZIP file format](https://en.wikipedia.org/wiki/ZIP_(file_format)), stored in little-endian ordering.

It has 2 parts:

- File header: only have one.
- Item file: currently only one is used. [document](./user_data_struct)

## File header (30 bytes)

| usage                                | length   | remark                   |
| ------------------------------------ | -------- | ------------------------ |
| File header signature                | 4 bytes  | 'PK\x03\x04'             |
| File format version                  | 2 bytes  | Defaults 1               |
| User data structure version          | 2 bytes  | Defaults 1               |
| CRC-32                               | 4 bytes  | Can be 0                 |
| File last modification UTC timestamp | 8 bytes  | Max: 2286-11-21 01:46:39 |
| Empty                                | 10 bytes | 0                        |

## Item header (50 bytes)

| usage                                | length   | remark                      |
| ------------------------------------ | -------- | --------------------------- |
| Item header signature                | 4 bytes  | 'PK\x01\x02'                |
| CRC-32                               | 4 bytes  | crc32(sha256(file content)) |
| Item last modification UTC timestamp | 8 bytes  | Max: 2286-11-21 01:46:39    |
| Item file name length                | 2 bytes  | Max: 32767                  |
| Item file data length                | 4 bytes  | Max: 2147483647(2T)         |
| Empty                                | 28 bytes | 0                           |

## Item body

| usage          | length   | remark      |
| -------------- | -------- | ----------- |
| Item file name | variable | Can be none |
| Item file data | variable | Can be none |

## Item tail (20 bytes)

| usage                 | length   | remark       |
| --------------------- | -------- | ------------ |
| End of item signature | 4 bytes  | 'PK\x05\x06' |
| Empty                 | 16 bytes | 0            |
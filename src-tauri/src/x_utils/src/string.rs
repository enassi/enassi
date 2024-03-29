
pub fn bytes_to_string(vec: &Vec<u8>) -> String {
    match String::from_utf8(vec.to_vec()) {
        Ok(st) => {
            return st;
        }
        Err(e) => {
            println!(">>> bytes_to_string error: {:?}", e);
            return "".to_string();
        }
    }
}
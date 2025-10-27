mod adder;

use crate::adder::{sum_array, add};

fn main() {
    println!("{}", add(1, 2));
    println!("{}", sum_array(vec![1,2,3]));
}

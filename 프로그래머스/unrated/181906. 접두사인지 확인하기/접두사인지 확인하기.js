function solution(my_string, is_prefix) {
  if (my_string.startsWith(is_prefix)) {
    return 1;
  } else {
    return 0;
  }
}
const paginate = (followers) => {
  //   console.log("followers", followers);
  const itemsPerPage = 9;
  // round up and add remaining items to last page
  const page = Math.ceil(followers.length / itemsPerPage);

  // new array of arrays with 9 items each
  const newFollowers = Array.from({ length: page }, (_, index) => {
    const start = index * itemsPerPage;
    // pull out items from original array and add to new array
    // slice(start, start + itemsPerPage) = slice(0, 9), slice(9, 18), slice(18, 27)
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

export default paginate;

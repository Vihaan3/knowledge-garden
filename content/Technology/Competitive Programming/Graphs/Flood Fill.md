Flood Fill: **algorithm that identifies and labels the connected components in a multidimensional array.** 

If you want to have recursive flood fill, then the implementation is like dfs.
```
const int MAX_N = 1000;
int grid[MAX_N][MAX_N];  // the grid itself
int row_num;
int col_num;

bool visited[MAX_N][MAX_N];  // keeps track of which nodes have been visited
int curr_size = 0;           // reset to 0 each time we start a new component

void floodfill(int r, int c, int color) {

	if ((r < 0 || r >= row_num || c < 0 || c >= col_num)  // if out of bounds
	    || grid[r][c] != color                            // wrong color
	    || visited[r][c]  // already visited this square

	)
		return;

	visited[r][c] = true;  // mark current square as visited
	curr_size++;           // increment the size for each square we visit
	// recursively call flood fill for neighboring squares

	floodfill(r, c + 1, color);
	floodfill(r, c - 1, color);
	floodfill(r - 1, c, color);
	floodfill(r + 1, c, color);

}

int main() {

	/*
	 * input code and other problem-specific stuff here
	 */
	for (int i = 0; i < row_num; i++) {
		for (int j = 0; j < col_num; j++) {
			if (!visited[i][j]) {
				curr_size = 0;
				/*
				 * start a flood fill if the square hasn't already been visited,
				 * and then store or otherwise use the component size
				 * for whatever it's needed for
				 */
				floodfill(i, j, grid[i][j]);
			}
		}
	}

	return 0;

}
```

If you want to have a non-recursive flood fill, the implementation is like bfs.

```
#include <iostream>
#include <stack>
#include <string>

using namespace std;
const int MAX_N = 2500;
const int R_CHANGE[]{0, 1, 0, -1};
const int C_CHANGE[]{1, 0, -1, 0};
int row_num;
int col_num;
string building[MAX_N];
bool visited[MAX_N][MAX_N];

void floodfill(int r, int c) {

	// Note: you can also use a queue and pop from the front for a BFS-based
	// approach
	stack<pair<int, int>> frontier;
	frontier.push({r, c});

	while (!frontier.empty()) {
		r = frontier.top().first;
		c = frontier.top().second;
		frontier.pop();
		if (r < 0 || r >= row_num || c < 0 || c >= col_num ||
		    building[r][c] == '#' || visited[r][c])
			continue;
		visited[r][c] = true;
		for (int i = 0; i < 4; i++) {
			frontier.push({r + R_CHANGE[i], c + C_CHANGE[i]});
		}
	}
}

int main() {
	cin >> row_num >> col_num;
	for (int i = 0; i < row_num; i++) { cin >> building[i]; }
	int room_num = 0;
	for (int i = 0; i < row_num; i++) {
		for (int j = 0; j < col_num; j++) {
			if (building[i][j] == '.' && !visited[i][j]) {
				floodfill(i, j);
				room_num++;
			}
		}
	}
	cout << room_num << endl;

}
```

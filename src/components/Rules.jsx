import React from "react";

export default function Rules(props) {
  return (
    <div style={{ padding: "1em" }}>
      <h1>Rules</h1>
      Players take turns, to the left, turning any two cards picture-side-up.
      The cards must be turned over completely.
      <p>
        A Match: A player makes a match if the two cards turned picture-side-up
        are identical. When a match is made, that player then takes another
        turn, and continues taking turns until he or she misses.
      </p>
      <p>
        A Miss: A player misses if the two cards turned over are not identical.
        When a player misses, he or she turns the two cards picture-side-down
        again, in the same place. That player's turn ends-and all players try to
        remember which cards were turned over, for future matches.
      </p>
      <p>
        The game continues until all cards have been matched and removed from
        the playing area. All players then count up their matching pairs. End of
        the Game The player who has the most pairs of matching cards wins.
      </p>
    </div>
  );
}

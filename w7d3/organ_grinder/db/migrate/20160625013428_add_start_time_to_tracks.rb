class AddStartTimeToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :start_time, :integer, limit: 5
  end
end

# This migration comes from active_admin_editor (originally 20120509223340)
class CreateAssets < ActiveRecord::Migration
  def change
    create_table :assets do |t|
      t.string :storage

      t.timestamps
    end
  end
end

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_03_024008) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.bigint "space_id", null: false
    t.string "date"
    t.string "duration"
    t.string "name"
    t.float "price"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "time"
    t.boolean "am"
    t.integer "attendants"
    t.index ["space_id"], name: "index_events_on_space_id"
  end

  create_table "events_performers", force: :cascade do |t|
    t.bigint "event_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_events_performers_on_event_id"
    t.index ["user_id"], name: "index_events_performers_on_user_id"
  end

  create_table "genre_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "genres", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "genre_categories_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["genre_categories_id"], name: "index_genres_on_genre_categories_id"
    t.index ["user_id"], name: "index_genres_on_user_id"
  end

  create_table "recordings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.string "url"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_recordings_on_user_id"
  end

  create_table "space_pictures", force: :cascade do |t|
    t.bigint "space_id", null: false
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["space_id"], name: "index_space_pictures_on_space_id"
  end

  create_table "spaces", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "capacity"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_spaces_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "number"
    t.string "profile_pic"
    t.text "description"
    t.string "username"
    t.string "location"
    t.boolean "is_performer"
    t.integer "size"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "events", "spaces"
  add_foreign_key "events_performers", "events"
  add_foreign_key "events_performers", "users"
  add_foreign_key "genres", "genre_categories", column: "genre_categories_id"
  add_foreign_key "genres", "users"
  add_foreign_key "recordings", "users"
  add_foreign_key "space_pictures", "spaces"
  add_foreign_key "spaces", "users"
end
